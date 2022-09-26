import React from "react";
import {dialogsPageType} from "../../../Redux/dialogs_reducer";
import s from "../Dialogs.module.css";
import {AddMessageForm} from "./AddMessageForm";

export const AddMessage = (props: {
    dialogsPage: dialogsPageType,
    AddMessageIDialogs: () => void
    UpdateMessageInDialogs: (text: string) => void
}) => {
    let createMessage: React.RefObject<any> = React.createRef();
    let onMessageChange = () => {
        let text: string = createMessage.current.value;
        props.UpdateMessageInDialogs(text);
    };

    let addMessageElement = () => {
        props.AddMessageIDialogs();
    }

    return (
        <AddMessageForm
            dialogsPage={props.dialogsPage}
            AddMessageIDialogs={props.AddMessageIDialogs}
            UpdateMessageInDialogs={props.UpdateMessageInDialogs}
            addMessageElement={addMessageElement}
            onMessageChange={onMessageChange}
            createMessage={createMessage}
        />
    )
}
