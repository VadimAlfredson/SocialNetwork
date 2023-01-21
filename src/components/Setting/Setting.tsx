import React from "react";
import s from './Setting.module.css';
import ProfileInfoForm from "./formProfileInfo";
import {ProfileType} from "../../Redux/profile_reducer";

type PropsType = {
    savePhotoTC: (photo: any) => void
    profile: ProfileType
    defaultPhoto: string
}
const Setting = (props: PropsType) => {
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhotoTC(e.target.files[0])
        }
    }
    return (<div className={s.profileInfoForm}>
        <div>
            <label /*for='inputUploadPhoto'*/ className={s.blockUploadPhoto}>
                <a className={s.textUploadPhoto}>Upload photo</a>
            <img  src={props.profile.photos.large || props.defaultPhoto} alt={'avatar'}/>
            <input id='inputUploadPhoto' type={"file"} onChange={onMainPhotoSelected} className={s.inputUploadPhoto}/>
            </label>
        </div>
        <div>
            <ProfileInfoForm />
        </div>
        </div>
    )
}

export default Setting