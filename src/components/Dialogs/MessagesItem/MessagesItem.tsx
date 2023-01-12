import React, {useEffect, useState} from "react";
import s from "../Dialogs.module.css";
import {dialogsType} from "../../../Redux/dialogs_reducer";
import dialogs from "../Dialogs";

export const MessagesItem = (props: {
    message: string,
    senderId: number
    OwnerId: number
    companionIcon: string
    ownerPhoto: string
}) => {
    let senderIcon = props.senderId === props.OwnerId ? props.ownerPhoto : props.companionIcon
    return <div className={props.senderId === props.OwnerId ? s.divOwnerMessage : s.divMessage}>
        <div>
            <img className={s.iconMessage} src={senderIcon}/>
        </div>
        <div className={props.senderId === props.OwnerId ? s.ownerMessageForm : s.messageForm}>
            <a className={props.senderId === props.OwnerId ? s.ownerTextMessage : s.textMessage}>{props.message}</a>
        </div>
    </div>
}