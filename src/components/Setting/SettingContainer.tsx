import React, {useEffect} from "react";
import s from './Setting.module.css';
import Setting from "./Setting";
import { connect } from "react-redux";
import {AddStateType} from "../../Redux/reduxStore";
import {ProfileType, savePhotoTC, userProfileThunkCreator} from "../../Redux/profile_reducer";

type PropsType = {
    ownerId: number
    profile: ProfileType
    userProfileThunkCreator: (id: number) => void
    savePhotoTC: (photo: any) => void
    defaultPhoto: string
}
const SettingContainer = (props: PropsType) => {
    useEffect(() => {
        if (props.ownerId != props.profile.userId) {
            props.userProfileThunkCreator(props.ownerId)
        }
    })
    return (
        <Setting savePhotoTC={props.savePhotoTC} profile={props.profile} defaultPhoto={props.defaultPhoto}/>
    )
}

const mapStateToProps = (state: AddStateType) => {
    return {
        ownerId: state.auth.userId,
        profile: state.profilePage.profile,
        defaultPhoto: state.profilePage.defaultPhoto,
    }
}

export default connect(mapStateToProps, {userProfileThunkCreator, savePhotoTC})(SettingContainer)