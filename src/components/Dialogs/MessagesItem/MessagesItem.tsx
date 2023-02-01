import React, {useEffect, useState} from "react";
import s from "../Dialogs.module.css";
import {dialogsType} from "../../../Redux/dialogs_reducer";
import dialogs from "../Dialogs";
import {useAppSelector} from "../../../Redux/reduxStore";

export const MessagesItem = (props: {
    onDeleteMessageChange: (messageId: string, userId: number) => void,
    message: string,
    senderId: number
    OwnerId: number
    companionIcon: string
    ownerPhoto: string
    viewed: boolean
    messageId: string
    recipientId: number
}) => {
    let [editMessage, setEditMessage] = useState(false)
    let [deleteMessage, setDeleteMessage] = useState(false)
    let message = props.message
        .replace(/&quot;/gi, `"`)
        .replace(/&#171;/gi, `"`)
        .replace(/&#187;/gi, `"`)
    console.log(props.senderId)
    let senderIcon = props.senderId === props.OwnerId ? props.ownerPhoto : props.companionIcon


    return <div className={editMessage || deleteMessage ? s.activeMessage : s.none}>
        <div className={props.senderId === props.OwnerId ? s.divOwnerMessage : s.divMessage} onClick={() => {
            setEditMessage(!deleteMessage ? editMessage => !editMessage : true)
        }}>
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
                    <div
                        className={editMessage && !deleteMessage ? s.deleteMessageOn : s.deleteMessageOff}
                        onClick={() => {
                            setEditMessage(true)
                            setDeleteMessage(deleteMessage => !deleteMessage)
                        }}>
                        <img className={s.deleteMessageIcon}
                             src={process.env.PUBLIC_URL + '/free-icon-delete-6467128.png'}/>
                    </div>
                </a>
            </div>
            <div className={deleteMessage ? s.warningDeleteMessage : s.deleteMessageOff}>
                Are you sure you want to delete the message?<br/>
                <button onClick={() => {
                    props.onDeleteMessageChange(props.messageId, props.senderId === props.OwnerId ? props.recipientId : props.senderId )
                    setDeleteMessage(false)
                }}>Yes
                </button>
                <button onClick={() => {
                    setDeleteMessage(false)
                }}>No
                </button>
            </div>
        </div>
    </div>
}