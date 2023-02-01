import React, {useEffect, useState} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {AddMessage} from "./AddMessage/AddMessage";
import {
    deleteMessageThunkCreator,
    dialogsType, messageType,
} from "../../Redux/dialogs_reducer";
import users from "../Users/Users";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../Redux/reduxStore";


const Dialogs = (props: {
                     dialogs: dialogsType[],
                     messages: messageType[],
                     isAuth: boolean
                     getDialogsThunkCreator: () => void
                     getMessagesUserThunkCreator: (userId: number) => void
                     postMessageToUserThunkCreator: (userId: number, bodyMessage: string) => void
                     dialogId: number
                     OwnerId: number
                     companionIcon: string
                     setCompanionIconAC: (photo: string | null) => void
                     defaultPhoto: string
                     ownerPhoto: string
                 }
) => {
    const dispatch = useAppDispatch()


    let onDeleteMessageChange = (messageId: string) => {
        return deleteMessageThunkCreator(messageId)
    }


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



    let [dialogsState, setDialogsState] = useState([] as dialogsType[])

    useEffect(() => {
        let dialogsArr = [] as dialogsType[]
        if (props.dialogs.length > 0){
        for (let i = 0; i < (props.dialogs.length> 10 ? 10 : props.dialogs.length); i++) {
            dialogsArr.push(props.dialogs[i])
        }}
        setDialogsState(dialogsArr)
        console.log(dialogsArr)
    }, [props.dialogs, props.dialogId])
    /*const getUsersIcon = (senderId: number) => {
        return props.getSenderIconThunkCreator(senderId)

    }*/


    let dialogUsers =
        props.dialogs[0] ?
        dialogsState.map(
        d => <DialogItem
            name={d.userName}
            id={d.id}
            key={d.id}
            onGetMessagesUser={onGetMessagesUser}/>
        ) : <NavLink to={'/users'}>Search friends</NavLink>;

    let messagesItem =
        props.messages[0] ?
            props.messages.map(
                m =>
                    <MessagesItem
                        message={m.body}
                        key={m.id}
                        senderId={m.senderId}
                        OwnerId={props.OwnerId}
                        companionIcon={props.companionIcon}
                        ownerPhoto={props.ownerPhoto}
                        viewed={m.viewed}
                        onDeleteMessageChange={onDeleteMessageChange}
                        messageId={m.id}
                    />
            ) : <div><h3 className={s.h3text}>start chatting first</h3></div>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsUsers}>
                {dialogUsers}
            </div>

            <div className={s.messages}>
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