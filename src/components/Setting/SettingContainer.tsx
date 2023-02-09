import React, {FC, useEffect} from "react";
import Setting from "./Setting";
import { connect } from "react-redux";
import {RootState, useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {savePhotoTC, userProfileThunkCreator} from "../../Redux/profile_reducer";
import {compose} from "redux";
import {withAuthNavigate} from "../hoc/witAuthNavigate";

type PropsType = {
    ownerId: number
    userId: number
    userProfileThunkCreator: (userId: number) => void
    savePhotoTC: (photo: any) => void
    defaultPhoto: string
}
const SettingContainer: FC<PropsType> = (props) => {
    const dispatch = useAppDispatch()
    const ownerId = useAppSelector(state => state.auth.userId)
    const userId = useAppSelector(state => state.profile.profile.userId)
    useEffect(() => {
        (ownerId !== userId) && dispatch(userProfileThunkCreator(props.ownerId))
    }, [])
    return (
        <Setting savePhotoTC={props.savePhotoTC} defaultPhoto={props.defaultPhoto}/>
    )
}


export default compose(withAuthNavigate)(SettingContainer)