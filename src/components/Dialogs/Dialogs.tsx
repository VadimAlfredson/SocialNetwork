import React, {useEffect, useState} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {AddMessage} from "./AddMessage/AddMessage";
import {
    dialogsType,
    getMessagesUserThunkCreator,
    messagesType, messageType,
    postMessageToUserThunkCreator
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
                 }
) => {
    /*    const [dialogs, setDialogs] = useState(props.dialogs);
        const [messages, setMessages] = useState(props.messages);*/
    /*props.getDialogsThunkCreator()*/
    useEffect(() => {
        debugger
        props.getDialogsThunkCreator()
    }, [])

    const onGetMessagesUser = (userId: number) => {
        props.getMessagesUserThunkCreator(userId)
    }

    const onMessageSentChange = (userId: number, bodyMessage: string) => {
        props.postMessageToUserThunkCreator(userId, bodyMessage)
    }

    let photoUser = () => {
        let arr = props.dialogs.filter(i => i.id === props.dialogId);
        return arr[0] ? arr[0].photos.large : 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}
    let iconUserInMessage = photoUser()

    let dialogUsers = props.dialogs.map(
        d => <DialogItem
            name={d.userName}
            id={d.id}
            key={d.id}
            onGetMessagesUser={onGetMessagesUser}/>
    );

    let messagesItem = props.messages.map(
        m => <MessagesItem
            iconUserInMessage={iconUserInMessage}
            dialogs={props.dialogs}
            message={m.body}
            key={m.id}
            dialogId={props.dialogId}
        />
    );
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