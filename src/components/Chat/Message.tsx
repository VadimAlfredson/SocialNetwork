import React, {FC} from "react";
import s from "./Chat.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    icon: string
    name: string
    message: string
    userId: number
}

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

export default MessageChat