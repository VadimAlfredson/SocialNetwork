import React, {FC, useState} from 'react';
import s from './../Profile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../Redux/profile_reducer";
import ProfileInfoForm from "./formProfileInfo";

type PropsType = {
    profile: ProfileType
    putStatusThunkCreator: () => void
    status: string
    isOwner: boolean
    savePhotoTC: ({}) => void
    follow: boolean
    onFollowProfileChange: (userId: number, follow: boolean) => void
}

const ProfileInfo: FC<PropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhotoTC(e.target.files[0])
        }
    }
    return <div className={s.profileClass}>
        <div className={s.avatarSide}>
            <img className={s.avatarImg}
                 src={props.profile.photos.large || 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
            {props.isOwner || <div>
                <div className={s.labelUpdatePhoto}>upload photo</div>
                <input className={s.inputPhoto} type={"file"} onChange={onMainPhotoSelected}/>
            </div>}
        </div>
        <div className={s.profileInfo}>
            <div className={s.name}><b>{props.profile.fullName}</b></div>
            <div className={s.status}><ProfileStatus status={props.status} putStatusThunkCreator={props.putStatusThunkCreator}/></div>
            <div className={s.editMode}>{props.isOwner &&
                <button className={props.follow ? s.buttonUnfollow : s.buttonFollow} onClick={() => {
                    props.onFollowProfileChange(props.profile.userId, props.follow)
                }}>{props.follow ? 'Unfollow' : 'Follow'}</button>}
            </div>
            <div className={s.informationUser}>
                <Information
                    profile={props.profile}
                    isOwner={props.isOwner}
                />
            </div>
        </div>
    </div>
}

const Contact: FC<{ contactTitle: string, contactValue: string }> = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}:</b> {contactValue}
    </div>
}

type InfoProps = {
    profile: any
    isOwner: boolean
}

const Information: FC<InfoProps> = ({profile, isOwner}) => {
    let [editMode, setEditMode] = useState(false)
    let editModeOnOff = (value: boolean) => setEditMode(value)
    return <div>
        <div>
            {isOwner || !editMode && <button onClick={() => {
                editModeOnOff(true)
            }}>edit contacts</button>}
            {!isOwner && editMode && <div><ProfileInfoForm editModeOnOff={editModeOnOff}/></div>}
            {editMode || <div>
                <div><b>looking for a job:</b> {profile.lookingForAJob ? "yes" : 'no'}</div>
                {profile.lookingForAJob &&
                    <div><b>looking for a job description:</b> {profile.lookingForAJobDescription}</div>}
            </div>}
            <div className={s.aboutMe}><b>About me:</b>{profile.aboutMe}</div>
        </div>
        <div className={s.contacts}>{(!isOwner && editMode) || Object.keys(profile.contacts).filter(i =>
            profile.contacts[i]).map(i => {
            return <Contact key={i} contactTitle={i} contactValue={profile.contacts[i]}/>
        })}</div>
    </div>
}

export default ProfileInfo