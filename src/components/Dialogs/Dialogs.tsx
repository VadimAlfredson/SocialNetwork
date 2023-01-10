import React, {useEffect, useState} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {AddMessage} from "./AddMessage/AddMessage";
import {
    dialogsType, messageType,
} from "../../Redux/dialogs_reducer";


const Dialogs = (props: {
                     dialogs: dialogsType[],
                     messages: messageType[],
                     AddMessageInDialogs: () => void,
                     isAuth: boolean
                     textMessage: string
                     getDialogsThunkCreator: () => void
                     getMessagesUserThunkCreator: (userId: number) => void
                     postMessageToUserThunkCreator: (userId: number, bodyMessage: string) => void
                     dialogId: number
                     getSenderIconThunkCreator: (senderId: number) => void
                     senderIcon: string
                     OwnerId: number
                     OwnerIcon: string
                     companionId: number
                     companionIcon: string
                     setCompanionIconAC: (photo: string | null) => void
                     defaultPhoto: string
                     ownerPhoto: string
                 }
) => {
    /*    const [dialogs, setDialogs] = useState(props.dialogs);
        const [messages, setMessages] = useState(props.messages);*/
    /*props.getDialogsThunkCreator()*/
    useEffect(() => {
        props.getDialogsThunkCreator()
    }, [])
    let getCompanionIcon = (userId: number) => {
        props.dialogs.find(i =>
            i.id === userId ?
                props.setCompanionIconAC(i.photos.large ? i.photos.large : props.defaultPhoto) :
                props.setCompanionIconAC(props.defaultPhoto))
    }
    const onGetMessagesUser = (userId: number) => {
        props.getMessagesUserThunkCreator(userId)
        getCompanionIcon(userId)

    }

    const onMessageSentChange = (userId: number, bodyMessage: string) => {
        props.postMessageToUserThunkCreator(userId, bodyMessage)
    }

    /*const getUsersIcon = (senderId: number) => {
        return props.getSenderIconThunkCreator(senderId)

    }*/


    let dialogUsers = props.dialogs.map(
        d => <DialogItem
            name={d.userName}
            id={d.id}
            key={d.id}
            onGetMessagesUser={onGetMessagesUser}/>
    );

    let messagesItem =
        props.messages[0] ?
            props.messages.map(
                m =>
                    <MessagesItem
                        dialogs={props.dialogs}
                        message={m.body}
                        key={m.id}
                        dialogId={props.dialogId}
                        senderIcon={props.senderIcon}
                        /*getUsersIcon={getUsersIcon}*/
                        senderId={m.senderId}
                        OwnerId={props.OwnerId}
                        OwnerIcon={props.OwnerIcon}
                        companionIcon={props.companionIcon}
                        ownerPhoto={props.ownerPhoto}
                    />
            ) : <div><h3 className={s.h3text}>start chatting first</h3></div>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsUsers}>
                <div className={s.dialogsTitle}>Dialogs</div>
                {dialogUsers}
            </div>

            <div className={s.messages}>
                <div className={s.titleMessages}>Messages</div>
                <div className={s.message}>
                    {messagesItem}
                </div>
                <div className={s.addMessage}>
                    <AddMessage
                        dialogId={props.dialogId}
                        onMessageSentChange={onMessageSentChange}
                    />
                </div>
            </div>
        </div>

    )
}

export default Dialogs