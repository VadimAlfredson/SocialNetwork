import React from "react";
import s from "../Dialogs.module.css";
import {dialogsReducerAction} from "../../../Redux/dialogs_reducer";

export const AddMessage1 = (props: {addNewMessage: string,
    UpdateMessageInDialogs: (text: string) => void ,
addMessageElement: () => void
}) => {
    let createMessage: React.RefObject<any> = React.createRef();

    let onMessageChange = () => {
        let text: string = createMessage.current.value;
        props.UpdateMessageInDialogs(text)
    };

    let addMessageElement = () => {
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