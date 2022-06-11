import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type messagesType = {
    id: number,
    message: string,
    icon: string,
}

export const DialogItem: React.FC<messagesType> = (props) => {
    return <div className={s.dialogDiv}>
        <NavLink to={"/dialogs/" + props.id}
                 className={dialogsData => dialogsData.isActive ? s.active : s.dialogItem}>{props.name}</NavLink>
    </div>
};