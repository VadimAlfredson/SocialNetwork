import React, {useEffect, useState} from "react";
import s from "../Dialogs.module.css";
import {dialogsType} from "../../../Redux/dialogs_reducer";
import dialogs from "../Dialogs";

export const MessagesItem = (props: {
    message: string,
    dialogs: dialogsType[],
    dialogId: number
    senderIcon: string
    /*getUsersIcon: (senderId: number) => void*/
    senderId: number
    OwnerId: number
    OwnerIcon: string
    companionIcon: string
    ownerPhoto: string
}) => {
    let senderIcon = props.senderId === props.OwnerId ? props.ownerPhoto : props.companionIcon
    /*useEffect(() => {props.getUsersIcon(props.senderId)}, [props.senderId])*/
    return <div className={props.senderId === props.OwnerId ? s.divOwnerMessage : s.divMessage}>
        <div>
            <img className={s.iconMessage} src={senderIcon}/>
        </div>
        <div className={props.senderId === props.OwnerId ? s.ownerMessageForm : s.messageForm}>
            <a className={props.senderId === props.OwnerId ? s.ownerTextMessage : s.textMessage}>{props.message}</a>
        </div>
    </div>
}