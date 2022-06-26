import React from "react";
import {
    AddMessageIDialogsActionCreator,
    dialogsType, messagesType,
    UpdateMessageInDialogsActionCreator
} from "../../../Redux/dialogs_reducer";
import {AddMessage} from "./AddMessage";
import {connect} from "react-redux";

/*export const AddMessageContainer = (store: {
    dialogs: dialogsType[],
    messages: messagesType[],
    dispatch: (props: { type: string }) => void,
    addNewMessage: string
}) => {

    let onMessageChange: (text: string) => void = (text: string) => {
        let action = UpdateMessageInDialogsActionCreator(text);
        store.dispatch(action)
    };

    let addMessageElement = () => {
        store.dispatch(AddMessageIDialogsActionCreator());
    }

    return <AddMessage UpdateMessageInDialogs={onMessageChange}
                       addMessageElement={addMessageElement}
                       addNewMessage={store.addNewMessage}
    />
}*/

const mapStateToProps = (state) => {
    return {
        addNewMessage: state.addNewMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            let action = UpdateMessageInDialogsActionCreator(text);
            dispatch(action);
        },
        addMessageElement:
            () => {
                dispatch(AddMessageIDialogsActionCreator())
            }
    }
}
export const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)