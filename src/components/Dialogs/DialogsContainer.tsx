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
        dialogs: state.dialogs.dialogs,
        messages: state.dialogs.messages,
        isAuth: state.auth.isAuth,
        dialogId: state.dialogs.dialogId,
        OwnerId: state.auth.userId,
        companionId: state.dialogs.companionId,
        companionIcon: state.dialogs.companionIcon,
        defaultPhoto: state.dialogs.defaultPhoto,
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