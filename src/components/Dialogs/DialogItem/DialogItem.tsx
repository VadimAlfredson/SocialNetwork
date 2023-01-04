import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


export const DialogItem = (props: {id: number, name: string}) => {
    return <NavLink to={"/dialogs/" + props.id}
                 className={dialogsData => dialogsData.isActive ? s.active : s.dialogItem}><div className={s.dialogDiv}>{props.name}</div></NavLink>
};