import React from "react";
import {
    getDialogsThunkCreator,
    getMessagesUserThunkCreator,
    getUsersIconInDialogsThunkCreator,
    postMessageToUserThunkCreator
} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AddStateType} from "../../Redux/reduxStore";
import {DispatchType} from "../../Redux/Types";
import {compose} from "redux";
import {withAuthNavigate} from "../hoc/witAuthNavigate";

let mapStateToProps = (state: AddStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth,
        dialogId: state.dialogsPage.dialogId
    }
}

export default compose(
    connect(mapStateToProps, {getDialogsThunkCreator, getMessagesUserThunkCreator, postMessageToUserThunkCreator, getUsersIconInDialogsThunkCreator}),
    withAuthNavigate
)(Dialogs)