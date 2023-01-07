import React from "react";
import s from "../Dialogs.module.css";

export const MessagesItem = (props: {message: string, icon: string}) => {
    return <div className={s.divMessage}>
        <div>
            <img className={s.iconMessage} src={props.icon} alt={'картинка'}/>
        </div>
        <div className={s.messageForm}>
            <a>{props.message}</a>
        </div>
    </div>
}