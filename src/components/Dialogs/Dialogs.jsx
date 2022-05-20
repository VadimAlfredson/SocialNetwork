import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNav}>Dialogs
                <div className={s.dialogItem}>
                    <NavLink to='/dialogs/1'
                             className={dialogsData => dialogsData.isActive ? s.active : s.dialogItem}>Dialog1</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to='/dialogs/2'
                             className={dialogsData => dialogsData.isActive ? s.active : s.dialogItem}>Dialog2</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to='/dialogs/3'
                             className={dialogsData => dialogsData.isActive ? s.active : s.dialogItem}>Dialog3</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to='/dialogs/4'
                             className={dialogsData => dialogsData.isActive ? s.active : s.dialogItem}>Dialog4</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to='/dialogs/5'
                             className={dialogsData => dialogsData.isActive ? s.active : s.dialogItem}>Dialog5</NavLink>
                </div>
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