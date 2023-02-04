import React, {useEffect, useState} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {AddMessage} from "./AddMessage/AddMessage";
import {
    deleteMessageThunkCreator,
    dialogsType,
    getDialogsThunkCreator,
    getMessagesUserThunkCreator,
    messageType,
    postMessageToUserThunkCreator,
    setCompanionIconAC,
} from "../../Redux/dialogs_reducer";
import users from "../Users/Users";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";


const Dialogs = (/*props: {
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
                 }*/
) => {
    const dialogs: dialogsType[] = useAppSelector(state => state.dialogs.dialogs)
    const messages: messageType[] = useAppSelector(state => state.dialogs.messages)
    const isAuth: boolean = useAppSelector(state => state.auth.isAuth)
    const dialogId: number = useAppSelector(state => state.dialogs.dialogId)
    const OwnerId: number = useAppSelector(state => state.auth.userId)
    const defaultPhoto: string = useAppSelector(state => state.dialogs.defaultPhoto)
    const companionIcon: string = useAppSelector(state => state.dialogs.companionIcon)
    const ownerPhoto: string = useAppSelector(state => state.auth.ownerPhoto)

    const dispatch = useAppDispatch()


    let onDeleteMessageChange = (messageId: string, userId: number) => {
        debugger
        dispatch(deleteMessageThunkCreator(messageId, userId))
    }


    useEffect(() => {
        dispatch(getDialogsThunkCreator())
    }, [])
    let getCompanionIcon = (userId: number) => {
        debugger
        dialogs.find(i =>
            i.id === userId ?
                dispatch(setCompanionIconAC(i.photos.large ? i.photos.large : defaultPhoto)) :
                console.log(i.id))
    }
    const onGetMessagesUser = (userId: number) => {
        dispatch(getMessagesUserThunkCreator(userId))
        getCompanionIcon(userId)

    }
    const onMessageSentChange = (userId: number, bodyMessage: string) => {
        dispatch(postMessageToUserThunkCreator(userId, bodyMessage))
    }

    let [dialogsState, setDialogsState] = useState([] as dialogsType[])

    useEffect(() => {
        let dialogsArr = [] as dialogsType[]
        if (dialogs.length > 0){
        for (let i = 0; i < (dialogs.length> 10 ? 10 : dialogs.length); i++) {
            dialogsArr.push(dialogs[i])
        }}
        setDialogsState(dialogsArr)
        console.log(dialogsArr)
    }, [dialogs, dialogId])

    let dialogUsers =
        dialogs[0] ?
        dialogsState.map(
        d => <DialogItem
            name={d.userName}
            id={d.id}
            key={d.id}
            onGetMessagesUser={onGetMessagesUser}/>
        ) : <NavLink to={'/users'}>Search friends</NavLink>;

    let messagesItem =
        messages[0] ?
            messages.map(
                m =>
                    <MessagesItem
                        message={m.body}
                        key={m.id}
                        senderId={m.senderId}
                        OwnerId={OwnerId}
                        companionIcon={companionIcon}
                        ownerPhoto={ownerPhoto}
                        viewed={m.viewed}
                        onDeleteMessageChange={onDeleteMessageChange}
                        messageId={m.id}
                        recipientId={m.recipientId}
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
                        dialogId={dialogId}
                        onMessageSentChange={onMessageSentChange}
                    />
                </div>
            </div>
        </div>

    )
}

export default Dialogs