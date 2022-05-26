import React from "react";
import s from "../Dialogs.module.css";

export const AddMessage = (props) => {
    let createMessage = React.createRef();

    let addMessageElement = () => {
        let text = createMessage.current.value;
        alert(text);
    }

    return <div>
        <textarea ref={createMessage}>dfggdgf</textarea>
    </div>,
        <div>
            <button onClick={addMessageElement}>Sent</button>
        </div>
}

export default AddMessage