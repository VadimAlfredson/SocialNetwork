import React, {useEffect, useState} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {AddMessage} from "./AddMessage/AddMessage";
import {dialogsType, getMessagesUserThunkCreator, messagesType} from "../../Redux/dialogs_reducer";


const Dialogs = (props: {
                     dialogs: dialogsType[],
                     messages: messagesType[],
                     AddMessageInDialogs: () => void,
                     isAuth: boolean
                     textMessage: string
                     getDialogsThunkCreator: () => void
    getMessagesUserThunkCreator: (userId: number) => void
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

    let dialogUsers = props.dialogs.map(
        d => <DialogItem name={d.userName} id={d.id} key={d.id} onGetMessagesUser={onGetMessagesUser}/>
    );

    let messagesItem = props.messages.map(
        m => <MessagesItem message={m.message} icon={m.icon} key={m.id}/>
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
                        AddMessageInDialogs={props.AddMessageInDialogs}
                    />
                </div>
            </div>
        </div>

    )
}

export default Dialogs