import React, {FC} from 'react';
import s from './../Profile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type PropsType = {
    profile: null | any
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
        <div>{props.isOwner && Object.keys(props.profile.contacts).filter(i => props.profile.contacts[i] != null).map(i => {
            return <Contact key={i} contactTitle={i} contactValue={props.profile.contacts[i]}/>
        }) || Object.keys(props.profile.contacts).map(i => {
            return <Contact key={i} contactTitle={i} contactValue={props.profile.contacts[i]}/>
        })}
        </div>
    </div>
}

const Contact: FC<{ contactTitle: string, contactValue: string }> = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}:</b> {contactValue}
    </div>
}

export default ProfileInfo