import React, {FC} from "react";
import s from "./Chat.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {useAppSelector} from "../../Redux/reduxStore";
import {theme} from "../../MUI/theme";

type PropsType = {
    icon: string
    name: string
    message: string
    userId: number
}


const MessageChat: FC<PropsType> = (props) => {
    const defaultIcon = useAppSelector(state => state.auth.defaultPhoto)
    const navigate = useNavigate()
    let onUserClick = () => {
        navigate(`/profile/${props.userId}`)
    }


    return <ListItem alignItems="flex-start" sx={{backgroundColor: '#151515', mt: '1px'}}>
        <ListItemAvatar>
            <Avatar alt={props.name} src={props.icon ? props.icon : defaultIcon} onClick={() => {
                onUserClick()
            }}/>
        </ListItemAvatar>
        <ListItemText
            primary={<Typography
                sx={{display: 'inline'}}
                component="span"
                variant="subtitle2"
                color={'#327d9b'}
            >
                {props.name}
            </Typography>}
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{display: 'inline'}}
                        component="span"
                        variant="body1"
                        color={'#D0D3D4'}
                    >
                        {props.message}
                    </Typography>
                </React.Fragment>
            }
        />
    </ListItem>


}

export default MessageChat


/*
const MessageChat: FC<PropsType> = (props) => {
    return <div className={s.messageBlock}>
        <NavLink className={s.avatar} to={`/profile/${props.userId}`}><img className={s.avatar}
                                                                           src={props.icon ? props.icon : 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
        </NavLink>
        <NavLink className={s.name} to={`/profile/${props.userId}`}>
            <div className={s.name}>{props.name}</div>
        </NavLink>
        <div className={s.message}>{props.message}</div>
    </div>
}

export default MessageChat*/
