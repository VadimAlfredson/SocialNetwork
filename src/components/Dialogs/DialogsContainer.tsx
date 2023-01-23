import React from "react";
import {
    getDialogsThunkCreator,
    getMessagesUserThunkCreator,
    postMessageToUserThunkCreator, setCompanionIconAC
} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../Redux/reduxStore";
import {compose} from "redux";
import {withAuthNavigate} from "../hoc/witAuthNavigate";

let mapStateToProps = (state: RootState) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth,
        dialogId: state.dialogsPage.dialogId,
        OwnerId: state.auth.userId,
        companionId: state.dialogsPage.companionId,
        companionIcon: state.dialogsPage.companionIcon,
        defaultPhoto: state.dialogsPage.defaultPhoto,
        ownerPhoto: state.auth.ownerPhoto
    }
}

export default compose(
    connect(mapStateToProps, {
        getDialogsThunkCreator,
        getMessagesUserThunkCreator,
        postMessageToUserThunkCreator,
        setCompanionIconAC,
    }),
    withAuthNavigate
)(Dialogs)