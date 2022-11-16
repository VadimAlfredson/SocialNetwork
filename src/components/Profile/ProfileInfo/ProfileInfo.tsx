import React, {FC, useState} from 'react';
import s from './../Profile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../Redux/profile_reducer";

type PropsType = {
    profile: ProfileType
    putStatusThunkCreator: () => void
    status: string
    isOwner: boolean
    savePhotoTC: ({}) => void
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
    return <div>
        <div>
            <img className={s.avatarImg}
                 src={props.profile.photos.large || 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
            {props.isOwner || <input type={"file"} onChange={onMainPhotoSelected}/>}
        </div>
        <ProfileStatus status={props.status} putStatusThunkCreator={props.putStatusThunkCreator}/>
        {/*<div>
            <button
                disabled={props.followingInProgress.includes(props.profile.userId)}
                onClick={() => (props.onFollowChange(props.profile.userId, props.profile.followed))
                }>{u.followed ? 'Unfollow' : 'Follow'}
            </button>
        </div>*/}
        <div>
            <Contacts profile={props.profile} isOwner={props.isOwner} />
        </div>
    </div>
}

const Contact: FC<{ contactTitle: string, contactValue: string }> = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}:</b> {contactValue}
    </div>
}

type ContactsProps = {
    profile: any
    isOwner: boolean
}

const Contacts: FC<ContactsProps> = ({profile, isOwner,}) => {
    let [editMode, setEditMode] = useState(false)
    return <div>
        {isOwner || <button onClick={() => {setEditMode(!editMode)}}>edit contacts</button>}
        {!isOwner && editMode && <div>edit</div>}
    <div>{(!isOwner && editMode) || Object.keys(profile.contacts).filter(i =>
            isOwner ? profile.contacts[i] != null : i).map(i => {
            return <Contact key={i} contactTitle={i} contactValue={profile.contacts[i]}/>
    })}</div>
    </div>
}

export default ProfileInfo