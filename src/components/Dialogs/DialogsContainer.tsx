import React from "react";
import {
    AddMessageIDialogsActionCreator,
    dialogsPageType,
    UpdateMessageInDialogsActionCreator
} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AddStateType} from "../../Redux/reduxStore";


/*const DialogsContainer = (props: { dialogsPage: dialogsPageType, dispatch: (props: { type: string }) => void, addNewMessage: string }) => {
    let state = props.dialogsPage
    let onMessageChange = (text: string) => {
        let action = UpdateMessageInDialogsActionCreator(text);
        props.dispatch(action)
    };

    let addMessageElement = () => {
        props.dispatch(AddMessageIDialogsActionCreator());
    }
    return <Dialogs
        dialogsPage={state}
        dispatch={props.dispatch}
        addNewMessage={props.addNewMessage}
        AddMessageIDialogs={addMessageElement}
        UpdateMessageInDialogs={onMessageChange}
    />
}

export default DialogsContainer*/

let mapStateToProps = (state: AddStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {

        AddMessageIDialogs: () => {
            dispatch(AddMessageIDialogsActionCreator())
        },
        UpdateMessageInDialogs: (text: string) => {
            dispatch(UpdateMessageInDialogsActionCreator(text));

        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer