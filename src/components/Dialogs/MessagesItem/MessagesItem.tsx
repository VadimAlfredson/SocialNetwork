import React, {useEffect, useState} from "react";
import s from "../Dialogs.module.css";
import {dialogsType} from "../../../Redux/dialogs_reducer";
import dialogs from "../Dialogs";
import {useAppSelector} from "../../../Redux/reduxStore";

export const MessagesItem = (props: {
    onDeleteMessageChange: (messageId: string) => void,
    message: string,
    senderId: number
    OwnerId: number
    companionIcon: string
    ownerPhoto: string
    viewed: boolean
    messageId: string
}) => {
    let [editMessage, setEditMessage] =useState(false)
    let message = props.message
        .replace(/&quot;/gi, `"`)
        .replace(/&#171;/gi, `"`)
        .replace(/&#187;/gi, `"`)
    console.log(props.message)
    let senderIcon = props.senderId === props.OwnerId ? props.ownerPhoto : props.companionIcon



    return <div className={editMessage ? s.activeMessage : s.none}>
        <div className={props.senderId === props.OwnerId ? s.divOwnerMessage : s.divMessage} onClick={() => {setEditMessage(editMessage => !editMessage)}}>
        <div>
            <img className={s.iconMessage} src={senderIcon}/>
        </div>
        <div className={props.senderId === props.OwnerId ?
            s.ownerMessageForm :
            s.messageForm}>
            <a className={props.senderId === props.OwnerId ?
                (props.viewed ? s.ownerTextMessage : s.ownerMessageViewed) :
                (props.viewed ? s.textMessage : s.textMessageViewed)
            }>{message}<br/>
                <button
                    className={editMessage ? s.deleteMessageOn : s.deleteMessageOff}
                        onClick={() => {props.onDeleteMessageChange(props.messageId)}}>
                    <img className={s.deleteMessageIcon} src={process.env.PUBLIC_URL + '/free-icon-delete-6467128.png'}/>
                </button>
            </a>
        </div>
    </div>
    </div>
}