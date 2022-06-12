import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem.tsx";
import {MessagesItem} from "./MessagesItem/MessagesItem.tsx";
import {AddMessage} from "./AddMessage/AddMessage.tsx";



const Dialogs: React.FC = (props) => {
    let dialogUsers = props.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>
    );

    let messagesItem = props.messages.map(
        m => <MessagesItem message={m.message} icon={m.icon}/>
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
                        dispatch={props.dispatch}
                        addNewMessage={props.addNewMessage}
                    />
                </div>
            </div>
        </div>

    )
}

export default Dialogs