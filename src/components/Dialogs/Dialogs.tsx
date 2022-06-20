import React, {FC} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {AddMessageContainer} from "./AddMessage/AddMessageContainer";
import {dialogsType, messagesType} from "../../Redux/dialogs_reducer";

type DialogsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    dispatch: () => void
    addNewMessage: string
}


const Dialogs: FC<DialogsType> = (props) => {
    let dialogUsers = props.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} key={d.id}/>
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
                    <AddMessageContainer
                        dispatch={props.dispatch}
                        addNewMessage={props.addNewMessage}
                    />
                </div>
            </div>
        </div>

    )
}

export default Dialogs