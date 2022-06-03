import React from "react";
import s from "../Dialogs.module.css";

export const MessagesItem = (props) => {
    return <div className={s.divMessage}>
        <div>
            <img className={s.iconMessage} src={props.icon}/>
        </div>
        <div className={s.message}>
            {props.message}
        </div>
    </div>
}