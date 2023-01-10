import React from "react";
import {
    getDialogsThunkCreator,
    getMessagesUserThunkCreator,
    /*getSenderIconThunkCreator,*/
    postMessageToUserThunkCreator, setCompanionIconAC
} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AddStateType} from "../../Redux/reduxStore";
import {compose} from "redux";
import {withAuthNavigate} from "../hoc/witAuthNavigate";

let mapStateToProps = (state: AddStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth,
        dialogId: state.dialogsPage.dialogId,
        senderIcon: state.dialogsPage.senderIcon,
        OwnerId: state.auth.userId,
        OwnerIcon: state.dialogsPage.OwnerIcon,
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
        /*getSenderIconThunkCreator,*/
        setCompanionIconAC,
    }),
    withAuthNavigate
)(Dialogs)