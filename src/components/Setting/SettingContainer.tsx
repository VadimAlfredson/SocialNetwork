import React, {FC, useEffect} from "react";
import Setting from "./Setting";
import { connect } from "react-redux";
import {RootState} from "../../Redux/reduxStore";
import {savePhotoTC, userProfileThunkCreator} from "../../Redux/profile_reducer";

type PropsType = {
    ownerId: number
    userId: number
    userProfileThunkCreator: (userId: number) => void
    savePhotoTC: (photo: any) => void
    defaultPhoto: string
}
const SettingContainer: FC<PropsType> = (props) => {
    useEffect(() => {
        (props.ownerId !== props.userId) && props.userProfileThunkCreator(props.ownerId)
    }, [])
    return (
        <Setting savePhotoTC={props.savePhotoTC} defaultPhoto={props.defaultPhoto}/>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        ownerId: state.auth.userId,
        userId: state.profile.profile.userId,
        defaultPhoto: state.profile.defaultPhoto,
    }
}

export default connect(mapStateToProps, {userProfileThunkCreator, savePhotoTC})(SettingContainer)