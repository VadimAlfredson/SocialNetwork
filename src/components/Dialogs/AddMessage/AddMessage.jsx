import React from "react";
import s from "../Dialogs.module.css";

export const AddMessage = (props) => {
    let createMessage = React.createRef();

    let addMessageElement = () => {
        let text = createMessage.current.value;
        props.AddMessageInDialogs(text)
    };

    let onMessageChange = () => {
        let text = createMessage.current.value;
        props.updateMessageInDialogs(text);
    }

    return <div className={s.divAddMessage}>
        <div>
            <textarea
                placeholder={'Add message'}
                className={s.textareaAddMessage}
                ref={createMessage}
                onChange={onMessageChange}
                value={props.addNewMessage}
            />
        </div>
        <div>
            <button className={s.buttonAddMessage} onClick={addMessageElement}>Sent</button>
        </div>
    </div>
}