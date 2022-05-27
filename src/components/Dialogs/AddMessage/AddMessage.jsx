import React from "react";
import s from "../Dialogs.module.css";

export const AddMessage = (props) => {
    let createMessage = React.createRef();

    let addMessageElement = () => {
        let text = createMessage.current.value;
        alert(text);
    }

    return <div className={s.divAddMessage}>
        <div>
            <textarea placeholder={'Add message'} className={s.textareaAddMessage} ref={createMessage}></textarea>
        </div>
        <div>
            <button className={s.buttonAddMessage} onClick={addMessageElement}>Sent</button>
        </div>
    </div>
}