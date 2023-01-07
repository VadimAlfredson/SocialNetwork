import React from "react";
import {dialogsPageType} from "../../../Redux/dialogs_reducer";
import {AddMessageForm} from "./AddMessageForm";

export const AddMessage = (props: {
    AddMessageInDialogs: (text: string) => void
    /*UpdateMessageInDialogs: (text: string) => void*/
}) => {
    return (
        <AddMessageForm
            AddMessageInDialogs={props.AddMessageInDialogs}
        />
    )
}
