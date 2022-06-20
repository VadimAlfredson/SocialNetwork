import React from "react";
import {
    AddMessageIDialogsActionCreator, dialogsReducerAction,
    dialogsType, messagesType,
    UpdateMessageInDialogsActionCreator
} from "../../../Redux/dialogs_reducer";
import {AddMessage} from "./AddMessage";

export const AddMessageContainer = (props: {dialogs: dialogsType[],
    messages: messagesType[],
    dispatch: (props: { type: string }) => void,
    addNewMessage: string
    AddMessageIDialogsActionCreator: dialogsReducerAction
}) => {

    let onMessageChange = (text:string) => {
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
