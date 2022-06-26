import React, {FC} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {AddMessageContainer} from "./AddMessage/AddMessageContainer";
import store from "../../Redux/reduxStore";


const Dialogs = () => {
    let dialogUsers = store.dialogsPage.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} key={d.id}/>
    );

    let messagesItem = store.dialogsPage.messages.map(
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
                                    dispatch={store.dispatch()}
                                    addNewMessage={store.addNewMessage}
                                    dialogs={store.dialogsPage.dialogs}
                                    messages={store.dialogsPage.messages}
                                />
                            </div>
                        </div>
                    </div>

                )
}

export default Dialogs