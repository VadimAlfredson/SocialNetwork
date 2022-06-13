import React from "react";
import s from "../Dialogs.module.css";

type messagesType = {
    id: number,
    message: string,
    icon: string,
}

export const MessagesItem: React.FC = (props: messagesType) => {
    return <div className={s.divMessage}>
        <div>
            <img className={s.iconMessage} src={props.icon}/>
        </div>
        <div className={s.message}>
            {props.message}
        </div>
    </div>
}