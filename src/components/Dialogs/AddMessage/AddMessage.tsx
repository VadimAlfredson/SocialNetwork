import React from "react";
import {dialogsPageType} from "../../../Redux/reducers/dialogs_reducer";
import {AddMessageForm} from "./AddMessageForm";

export const AddMessage = (props: {
    onMessageSentChange: (userId: number, bodyMessage: string) => void
    dialogId: number
}) => {
    return (
        <AddMessageForm
            dialogId={props.dialogId}
            onMessageSentChange={props.onMessageSentChange}
        />
    )
}
