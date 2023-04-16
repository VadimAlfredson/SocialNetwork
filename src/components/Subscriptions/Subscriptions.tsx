import React, {FC} from 'react';
import {UserType} from "../../Redux/reducers/users_reducers";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {
    getSubscriptions,
    totalCountSubscriptionsSelector
} from "../../Redux/selectors/subscriptions_selectors";
import {Avatar, AvatarGroup, Box, Paper, Typography} from "@mui/material";


let Subscriptions: FC<{}> = (props) => {
    const dispatch = useAppDispatch()
    const defaultPhoto = useAppSelector(state => state.auth.defaultPhoto)

    const subscriptions = useAppSelector(getSubscriptions)
    const totalCountSubscriptions = useAppSelector(totalCountSubscriptionsSelector)


    return <Box sx={{display: 'flex', justifyContent: 'center',
        alignItems: 'center', margin: 'auto', flexDirection: 'column'
    }}>
            <Typography
                variant='subtitle1'
                color={'info'}
                m={'3px auto'}
                sx={{textAlign: 'center', fontSize: '15px', textDecoration: 'none'}}
            >
                Subscriptions
            </Typography>
        <AvatarGroup sx={{justifyContent: 'center'}}>
            {
                subscriptions.map((u: UserType) =>
                        <Avatar
                            variant={'circular'}
                            alt={u.name}
                            src={u.photos.small ? u.photos.small : defaultPhoto
                            }
                        />
                )}
        </AvatarGroup>
    </Box>
}

export default Subscriptions;