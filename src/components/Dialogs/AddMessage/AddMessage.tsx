import React from "react";
import {dialogsPageType} from "../../../Redux/dialogs_reducer";
import {AddMessageForm} from "./AddMessageForm";

export const AddMessage = (props: {
    dialogsPage: dialogsPageType,
    AddMessageInDialogs: (text: string) => void
    /*UpdateMessageInDialogs: (text: string) => void*/
}) => {
    return (
        <AddMessageForm
            dialogsPage={props.dialogsPage}
            AddMessageInDialogs={props.AddMessageInDialogs}
        />
    )
}
