import React, {FC} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {AddMessage} from "./AddMessage/AddMessage";
import {dialogsPageType} from "../../Redux/dialogs_reducer";


const Dialogs = (props: {dialogsPage: dialogsPageType,
    dispatch: (props: { type: string }) => void,
    AddMessageIDialogs: () => void
    UpdateMessageInDialogs: (text: string) => void}
) => {
    let dialogUsers = props.dialogsPage.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} key={d.id}/>
    );

    let messagesItem = props.dialogsPage.messages.map(
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
                        AddMessageIDialogs={props.AddMessageIDialogs}
                        dialogsPage={props.dialogsPage}
                        dispatch={props.dispatch}
                        UpdateMessageInDialogs={props.UpdateMessageInDialogs}
                    />
                </div>
            </div>
        </div>

    )
}

export default Dialogs