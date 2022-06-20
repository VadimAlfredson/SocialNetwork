import React from "react";
import {AddMessageIDialogsActionCreator, UpdateMessageInDialogsActionCreator} from "../../../Redux/dialogs_reducer";
import {AddMessage} from "./AddMessage";

export const AddMessageContainer: React.FC = (props) => {

    let onMessageChange: React.FC = (text:string) => {
        let action = UpdateMessageInDialogsActionCreator(text);
        props.dispatch(action)
    };

    let addMessageElement: React.FC = () => {
        props.dispatch(AddMessageIDialogsActionCreator());
    }

    return <AddMessage UpdateMessageInDialogs={onMessageChange}
                       addMessageElement={addMessageElement}
                       addNewMessage={props.addNewMessage}
    />
}
