import React, {FC, useEffect} from "react";
import Setting from "./Setting";
import { connect } from "react-redux";
import {RootState, useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {savePhotoTC, userProfileThunkCreator} from "../../Redux/reducers/profile_reducer";
import {compose} from "redux";
import {withAuthNavigate} from "../hoc/witAuthNavigate";
import {getDefaultPhoto, getOwnerId} from "../../Redux/selectors/auth_selectors";
import {getProfile} from "../../Redux/selectors/profile_selectors";

const SettingContainer: FC<{}> = () => {
    const dispatch = useAppDispatch()
    const ownerId = useAppSelector(getOwnerId)
    const profile = useAppSelector(getProfile)
    const defaultPhoto = useAppSelector(getDefaultPhoto)
    useEffect(() => {
        (ownerId !== profile.userId) && dispatch(userProfileThunkCreator(ownerId))
    }, [])
    return (
        <Setting defaultPhoto={defaultPhoto}/>
    )
}


export default compose(withAuthNavigate)(SettingContainer)