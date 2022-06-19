import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {dialogsType} from "../../../Redux/dialogs_reducer";


export const DialogItem: React.FC = (props: dialogsType) => {
    return <div className={s.dialogDiv}>
        <NavLink to={"/dialogs/" + props.id}
                 className={dialogsData => dialogsData.isActive ? s.active : s.dialogItem}>{props.name}</NavLink>
    </div>
};