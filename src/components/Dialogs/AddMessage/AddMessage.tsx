import React from "react";
import s from "../Dialogs.module.css";

export const AddMessage: React.FC = (props) => {
    let createMessage = React.createRef();

    let onMessageChange: React.FC = () => {
        let text: string = createMessage.current.value;
        props.UpdateMessageInDialogs(text)
    };

    let addMessageElement: React.FC = () => {
        props.addMessageElement();
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