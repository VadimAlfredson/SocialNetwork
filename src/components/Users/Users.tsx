import React, {FC, useEffect, useState} from "react";
import {onChangeUsersThunkCreator, onFollowChangeThunkCreator, UserType} from "../../Redux/reducers/users_reducers";
import s from "../Users/users.module.css"
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";
import {putDialogUserThunkCreator} from "../../Redux/reducers/dialogs_reducer";
import FormSearchUsers from "./formSearchUsers";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {
    getCurrentPage,
    getFollowingInProgress,
    getFriends, getPageSize,
    getTerm,
    getUsers,
    isFetchingSelector
} from "../../Redux/selectors/users_selectors";
import {getDefaultPhoto, isAuthSelector} from "../../Redux/selectors/auth_selectors";
import {Box, Button, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";


let Users: FC = (props) => {
    const users = useAppSelector(getUsers)
    const followingInProgress = useAppSelector(getFollowingInProgress)
    const isAuth = useAppSelector(isAuthSelector)
    const isFetching = useAppSelector(isFetchingSelector)
    const term = useAppSelector(getTerm)
    const friends = useAppSelector(getFriends)
    const pageSize = useAppSelector(getPageSize)
    const currentPage = useAppSelector(getCurrentPage)
    const defaultPhoto = useAppSelector(getDefaultPhoto)

    let [pageNumber, setPageNumber] = useState(currentPage)


    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    let location = useLocation()


    let onUsersChange = (pageNumber: number, pageSize: number, termSearch: string, friend?: boolean) => {
        /*dispatch(onChangeUsersThunkCreator(pageNumber, pageSize, term, friend))*/
        navigate({
            pathname: '/users',
            search: termSearch || friend || pageNumber ? "?" +
                (pageNumber ? `pageNumber=${pageNumber}${termSearch || friend ? '&' : ''}` : '') +
                (termSearch ? `term=${termSearch}${friend ? '&' : ''}` : '') +
                (friend === true ? `friend=${friend}` : '')
                : ''
        })
        if (currentPage != pageNumber || term != termSearch || friends != !!friend) {
            dispatch(onChangeUsersThunkCreator(pageNumber, pageSize, term || '', friend))
        }
    }

    let onFollowChange = (userId: number, follow: boolean) => {
        dispatch(onFollowChangeThunkCreator(userId, follow))
    }

    let onDialogUserChange = (userId: number) => {
        dispatch(putDialogUserThunkCreator(userId))
        navigate(`/dialogs/${userId}`)
    }

    useEffect(() => {
        let {search} = location
        let arr = search.substring(1).split('&').reduce((params: any, param) => {
            let [key, value] = param.split('=');
            params[key] = value ? decodeURIComponent(value.replace(/\+/g, '')) : "";
            return params;
        }, {})
        let friendValue = arr.friend === 'true' ? true : undefined
        if (pageNumber != +arr.pageNumber ||
            term != (arr.term ? arr.term : '') ||
            friends != friendValue) {
            onUsersChange(+arr.pageNumber, pageSize, arr.term || '', friendValue)
        }
    }, [location.search])

    useEffect(() => {
        navigate({
            pathname: '/users',
            search: term || friends || pageNumber ? "?" +
                (pageNumber ? `pageNumber=${pageNumber}${term || friends ? '&' : ''}` : '') +
                (term ? `term=${term}${friends ? '&' : ''}` : '') +
                (friends === true ? `friend=${friends}` : '')
                : ''
        })
    }, [term, friends, pageNumber])


    return (
        <div className={s.usersComponent}>
            <Paginator
                onPageChange={onUsersChange}
            />
            <FormSearchUsers
                onUsersChange={onUsersChange}
            />
            {isFetching ? <Preloader/> :
                <Stack display={'flex'} flexDirection={'column'} gap={1}>
                    {
                        users.map((u: UserType) => <Card
                            sx={{display: 'flex', backgroundColor: '#151515', width: {xs: '100%', sm: 'auto'}}}
                            key={u.id} >
                            <CardMedia component={'img'} sx={{width: '150px'}}
                                       image={u.photos.small !== null ? u.photos.small : defaultPhoto}
                                       onClick={() => {
                                           navigate('/profile/' + u.id)
                                       }}
                            />
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} m={'0 auto'}>
                                <CardContent sx={{display: 'flex',  flexDirection: 'column',alignItems: 'center',
                                    justifyContent: 'center', flexGrow: 1}}>
                                    <Typography m={'0 auto'} color={'#D0D3D4'} component="div" variant="h6">{u.name}</Typography>
                                    <Typography variant="subtitle2" color={'#327d9b'}
                                                component="div">{u.status}</Typography>
                                </CardContent>
                                <Box display={'flex'} flexDirection={'row'} mb={1} gap={1}>
                                    {isAuth ?
                                        <Button
                                            variant={u.followed ? 'outlined' : 'contained'}
                                            color={u.followed ? 'info' : 'success'}
                                                disabled={followingInProgress.includes(u.id)}
                                                onClick={() => (onFollowChange(u.id, u.followed))
                                                }>{u.followed ? 'Unfollow' : 'Follow'}
                                        </Button> : <Button onClick={()=>{navigate('../login')}}>
                                            color={'info'}
                                            Register to subscribe
                                        </Button>}
                                    {isAuth &&
                                            <Button
                                                variant={'contained'}
                                                color={'success'}
                                                    onClick={() => {
                                                        onDialogUserChange(u.id)
                                                    }}>Message
                                            </Button>
                                    }
                                </Box>
                            </Box>
                        </Card>)}
                </Stack>}
        </div>
    )
}

export default Users