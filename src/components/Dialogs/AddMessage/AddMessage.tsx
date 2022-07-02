import React from "react";
import {
    dialogsPageType, dialogsReducerAction
} from "../../../Redux/dialogs_reducer";
import s from "../Dialogs.module.css";

export const AddMessage = (props: {dialogsPage: dialogsPageType,
    dispatch:  (props: dialogsReducerAction) =>  dialogsReducerAction,
    AddMessageIDialogs: () => void
    UpdateMessageInDialogs: (text: string) => void
}) => {
    let createMessage: React.RefObject<any> = React.createRef();
    let onMessageChange = () => {
        let text:string = createMessage.current.value;
        props.UpdateMessageInDialogs(text);
    };

    let addMessageElement = () => {
        props.AddMessageIDialogs();
    }

    return (
    <div className={s.divAddMessage}>
        <div>
            <textarea
                placeholder={'Add message'}
                className={s.textareaAddMessage}
                ref={createMessage}
                onChange={onMessageChange}
                value={props.dialogsPage.addNewMessage}
            />
        </div>
        <div>
            <button className={s.buttonAddMessage} onClick={addMessageElement}>Sent</button>
        </div>
    </div>
    )
}
