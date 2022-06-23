import React, {FC} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {AddMessageContainer} from "./AddMessage/AddMessageContainer";
import {dialogsType, messagesType} from "../../Redux/dialogs_reducer";
import StoreContext from "../../StoreContext";
import store from "../../Redux/reduxStore";


const Dialogs = () => {
    return (
                    <StoreContext.Consumer> {
                        (store) => {
                            let dialogUsers = store.dialogs.map(
                                d => <DialogItem name={d.name} id={d.id} key={d.id}/>
                            );

                            let messagesItem = store.messages.map(
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
                                    dispatch={store.dispatch}
                                    addNewMessage={store.addNewMessage}
                                    dialogs={store.dialogs}
                                    messages={store.messages}
                                />
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    }
                    </StoreContext.Consumer>

    )
}

export default Dialogs