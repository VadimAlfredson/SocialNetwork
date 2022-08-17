import React from "react";
import {
    AddMessageIDialogsActionCreator,
    UpdateMessageInDialogsActionCreator
} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AddStateType} from "../../Redux/reduxStore";
import {DispatchType} from "../../Redux/Types";

let mapStateToProps = (state: AddStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
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