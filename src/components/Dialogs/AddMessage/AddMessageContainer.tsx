import React from "react";
import {
    AddMessageIDialogsActionCreator,
    dialogsType, messagesType,
    UpdateMessageInDialogsActionCreator
} from "../../../Redux/dialogs_reducer";
import {AddMessage} from "./AddMessage";

export const AddMessageContainer = (store: {dialogs: dialogsType[],
    messages: messagesType[],
    dispatch: (props: { type: string }) => void,
    addNewMessage: string
}) => {

    let onMessageChange:(text: string) => void = (text:string) => {
        let action = UpdateMessageInDialogsActionCreator(text);
        props.dispatch(action)
    };

    let addMessageElement = () => {
        props.dispatch(AddMessageIDialogsActionCreator());
    }

    return <AddMessage UpdateMessageInDialogs={onMessageChange}
                       addMessageElement={addMessageElement}
                       addNewMessage={props.addNewMessage}
    />
}
