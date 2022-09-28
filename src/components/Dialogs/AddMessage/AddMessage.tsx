import React from "react";
import {dialogsPageType} from "../../../Redux/dialogs_reducer";
import s from "../Dialogs.module.css";
import {AddMessageForm} from "./AddMessageForm";

export const AddMessage = (props: {
    dialogsPage: dialogsPageType,
    AddMessageInDialogs: (text: string) => void
    /*UpdateMessageInDialogs: (text: string) => void*/
}) => {
    let createMessage: React.RefObject<any> = React.createRef();
    /*let onMessageChange = () => {
        let text: string = createMessage.current.value;
        props.UpdateMessageInDialogs(text);
    };*/

    return (
        <AddMessageForm
            dialogsPage={props.dialogsPage}
            AddMessageInDialogs={props.AddMessageInDialogs}
        />
    )
}
