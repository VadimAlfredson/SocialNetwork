import React, {FC, useEffect, useState} from 'react';
import s from './../Profile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../Redux/profile_reducer";
import {NavLink} from "react-router-dom";
import profile from "../Profile";

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    follow: boolean
    onFollowProfileChange: (userId: number, follow: boolean) => void
    onPutDialogOnProfileChange: (userId: number) => void
}

const ProfileInfo: FC<PropsType> = (props) => {
    let [showFullPhoto, setShowFullPhoto] = useState(false)

    useEffect(() => {setShowFullPhoto(false)}, [props.profile.userId])
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={s.profileClass}>
        {showFullPhoto && props.profile.photos.large &&
        <img className={s.fullPhoto} onClick={() => setShowFullPhoto(false)}
        src={props.profile.photos.large}/>
        }
        <div className={s.avatarSide}>
            <img className={s.avatarImg}
                 src={props.profile.photos.large || 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}
            onClick={() => props.profile.photos.large ? setShowFullPhoto(true) : setShowFullPhoto(false)}
            />
        </div>
        <div className={s.profileInfo}>
            <div className={s.name}><b>{props.profile.fullName}</b></div>
            <div className={s.status}>
                <ProfileStatus status={props.status} isOwner={props.isOwner}/>
            </div>
            <div className={s.editMode}>{props.isOwner &&
                <button className={props.follow ? s.buttonUnfollow : s.buttonFollow} onClick={() => {
                    props.onFollowProfileChange(props.profile.userId, props.follow)
                }}>{props.follow ? 'Unfollow' : 'Follow'}</button>}
            </div>
            <div className={s.editMode}>{props.isOwner &&
                <NavLink to={"/dialogs/" + props.profile.userId} className={s.buttonFollow} onClick={() => {
                    props.onPutDialogOnProfileChange(props.profile.userId)
                }}>Send message</NavLink>}
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
            <div>
                <div><b>looking for a job:</b> {profile.lookingForAJob ? "yes" : 'no'}</div>
                {profile.lookingForAJob &&
                    <div><b>looking for a job description:</b> {profile.lookingForAJobDescription}</div>}
            </div>{/*}*/}
            <div className={s.aboutMe}><b>About me:</b>{profile.aboutMe}</div>
        </div>
        <div className={s.contacts}>{(!isOwner && editMode) || Object.keys(profile.contacts).filter(i =>
            profile.contacts[i]).map(i => {
            return <Contact key={i} contactTitle={i} contactValue={profile.contacts[i]}/>
        })}</div>
    </div>
}

export default ProfileInfo