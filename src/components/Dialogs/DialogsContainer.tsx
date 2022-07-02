import React from "react";
import {
    AddMessageIDialogsActionCreator,
    dialogsPageType, dialogsReducerAction,
    UpdateMessageInDialogsActionCreator
} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AddStateType} from "../../Redux/reduxStore";

let mapStateToProps = (state: AddStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: (props: dialogsReducerAction) =>  dialogsReducerAction) => {
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