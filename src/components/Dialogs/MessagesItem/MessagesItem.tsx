import React from "react";
import s from "../Dialogs.module.css";
import {messagesType} from "../../../Redux/dialogs_reducer";

export const MessagesItem = (props: {icon: string, message: string}) => {
    return <div className={s.divMessage}>
        <div>
            <img className={s.iconMessage} src={props.icon}/>
        </div>
        <div className={s.message}>
            {props.message}
        </div>
    </div>
}