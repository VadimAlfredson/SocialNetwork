import React from "react";
import s from "../Dialogs.module.css";
import {messagesType} from "../../../Redux/dialogs_reduser";

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