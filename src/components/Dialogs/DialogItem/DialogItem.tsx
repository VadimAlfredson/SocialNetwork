import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


export const DialogItem = (props: {id: number, name: string, onGetMessagesUser: (userId: number) => void}) => {

    return <NavLink to={"/dialogs/" + props.id} onClick={() => {props.onGetMessagesUser(props.id)}}
                 className={dialogsData => dialogsData.isActive ? s.active : s.dialogItem}>
        {props.name}
    </NavLink>
};