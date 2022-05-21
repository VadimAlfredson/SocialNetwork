import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialogItem}>
        <NavLink to={"/dialogs/" + props.id} className={dialogsData => dialogsData.isActive ? s.active : s.dialogItem}>{props.name}</NavLink>
    </div>
}

const Dialogs = (props) => {
    return (
        <div  className={s.dialogs}>
            <div>Dialogs
                <DialogItem name='Alex' id='1'/>
                <DialogItem name='Alex' id='2'/>
                <DialogItem name='Alex' id='3'/>
                <DialogItem name='Alex' id='4'/>
                <DialogItem name='Alex' id='5'/>

            </div>

            <div className={s.messages}>Messages
                <div className={s.message}>Message</div>
                <div className={s.message}>Message</div>
                <div className={s.message}>Message</div>
                <div className={s.message}>Message</div>
                <div className={s.message}>Message</div>
            </div>
        </div>
    )
}

export default Dialogs