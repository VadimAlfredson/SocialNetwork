import React, {useEffect, useState} from "react";
import s from "../Dialogs.module.css";
import {dialogsType} from "../../../Redux/dialogs_reducer";

export const MessagesItem = (props: {
    message: string,
    dialogs: dialogsType[],
    dialogId: number
    senderIcon: string
    getUsersIcon: (senderId: number) => void
    senderId: number
    OwnerId: number
}) => {
    useEffect(() => {props.getUsersIcon(props.senderId)}, [props.senderId])
    return <div className={props.senderId === props.OwnerId ? s.divOwnerMessage : s.divMessage}>
        <div>
            <img className={s.iconMessage} src={props.senderIcon}/>
        </div>
        <div className={props.senderId === props.OwnerId ? s.ownerMessageForm : s.messageForm}>
            <a className={props.senderId === props.OwnerId ? s.ownerTextMessage : s.textMessage}>{props.message}</a>
        </div>
    </div>
}