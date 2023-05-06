import React, {FC, useEffect, useState} from 'react';
import s from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../Redux/reduxStore";
import {getDefaultPhoto} from "../../Redux/selectors/auth_selectors";
import {AppBar, Avatar, Box, Button, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

type PropsType = {
    photo: string
    isAuth: boolean
    login: string
    logoutThunkCreator: () => void
}
const Header: FC<PropsType> = (props) => {
    const defaultPhoto = useAppSelector(getDefaultPhoto)
    const navigate = useNavigate()

    let [ownerPhoto, setOwnerPhoto] = useState(props.photo)
    useEffect( () => {
        if (props.photo) {
            setOwnerPhoto(props.photo)}
        else {setOwnerPhoto(defaultPhoto)}
    }, [props.photo])
    return (
        <Box sx={{ flexGrow: 1, borderBottom: '1px solid #D0D3D4'}}>
            <AppBar position="static" color={'primary'}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2}}
                    >
<Diversity3OutlinedIcon sx={{color: '#D0D3D4'}} onClick={() => {navigate('/profile')}} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, color: '#D0D3D4'}}
                        display={{xs: 'none', sm: 'inline-block'}}
                    >
                        Social Network
                    </Typography>
                    {props.isAuth ?
                        <Stack display={'flex'}
                               flexDirection={'row'}
                               m={'auto 0 auto auto'}
                        >
                            <Typography
                                display={{xs: 'none', sm: 'inline-block'}}
                                textAlign={'center'}
                                margin={'auto 10px auto auto'}
                                variant={'subtitle2'}
                                sx={{color: '#D0D3D4'}}
                            >{props.login}</Typography>
                            <Avatar
                            alt={props.login}
                            src={ownerPhoto}
                        />
                            <Button onClick={props.logoutThunkCreator}>
                                <LogoutOutlinedIcon sx={{fontSize: '30px'}} color={'info'}/>
                            </Button>
                        </Stack> : <NavLink to={'/login'}>
                            <Button variant={'outlined'} color={'info'}>Login</Button>
                        </NavLink>}

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header