import React, {useEffect, useState} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {AddMessage} from "./AddMessage/AddMessage";
import {
    deleteMessagesUnmountThunkCreator,
    deleteMessageThunkCreator,
    dialogsType,
    getDialogsThunkCreator,
    getMessagesUserThunkCreator,
    messageType,
    postMessageToUserThunkCreator,
    setCompanionIconAndNameAC,
} from "../../Redux/reducers/dialogs_reducer";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {
    getCompanionIcon, getCompanionId,
    getCompanionName,
    getDialogId,
    getDialogs,
    getMessages
} from "../../Redux/selectors/dialogs_selectors";
import {getDefaultPhoto, getOwnerId, getOwnerPhoto} from "../../Redux/selectors/auth_selectors";


const Dialogs = () => {
    const dialogs: dialogsType[] = useAppSelector(getDialogs)
    const messages: messageType[] = useAppSelector(getMessages)
    const dialogId: number = useAppSelector(getDialogId)
    const OwnerId: number = useAppSelector(getOwnerId)
    const defaultPhoto: string = useAppSelector(getDefaultPhoto)
    const companionIcon: string = useAppSelector(getCompanionIcon)
    const companionName: string = useAppSelector(getCompanionName)
    const companionId: number | null = useAppSelector(getCompanionId)
    const ownerPhoto: string = useAppSelector(getOwnerPhoto)

    const [dialogsCount, setDialogsCount] = useState(10)

    const dispatch = useAppDispatch()


    let onDeleteMessageChange = (messageId: string, userId: number) => {
        dispatch(deleteMessageThunkCreator(messageId, userId))
    }


    useEffect(() => {
        dispatch(getDialogsThunkCreator())
        return () => {dispatch(deleteMessagesUnmountThunkCreator())}
    }, [])

    let getCompanionIconAndName = (userId: number) => {
        dialogs.find(i => i.id === userId ?
                dispatch(setCompanionIconAndNameAC({photo: i.photos.large ? i.photos.large : defaultPhoto, userName: i.userName, companionId: i.id})) :
          console.log('sd')
            )
    }
    const onGetMessagesUser = (userId: number) => {
        dispatch(getMessagesUserThunkCreator(userId))
        getCompanionIconAndName(userId)

    }
    const onMessageSentChange = (userId: number, bodyMessage: string) => {
        dispatch(postMessageToUserThunkCreator(userId, bodyMessage))
    }

    let [dialogsState, setDialogsState] = useState([] as dialogsType[])

    useEffect(() => {
        let dialogsArr = [] as dialogsType[]
        if (dialogs.length > 0){
        for (let i = 0; i < (dialogs.length > dialogsCount ? dialogsCount : dialogs.length); i++) {
            dialogsArr.push(dialogs[i])
        }}
        setDialogsState(dialogsArr)
        console.log(dialogsArr)
    }, [dialogs, dialogId, dialogsCount])

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
                        defaultPhoto={defaultPhoto}
                    />
            ) : <div><h3 className={s.h3text}>start chatting first</h3></div>
    return (
        <div className={s.dialogs}>
            <div>
                <NavLink to={'/users'} className={s.addDialog}>Add dialog</NavLink>
            <div className={s.dialogsUsers}>
                {dialogUsers}
            </div>{(dialogsCount < dialogs.length) &&
                <div className={s.getMoreDialogs} onClick={() => setDialogsCount(dialogsCount => dialogsCount + 5)}>Get more dialogs</div>}
            </div>

            <div className={s.messages}>
                <NavLink to={`/profile/${companionId}`} className={s.companionName}>{companionName}</NavLink>
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