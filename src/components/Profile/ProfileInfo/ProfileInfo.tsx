import React, {FC, useEffect, useState} from 'react';
import s from './../Profile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../Redux/reducers/profile_reducer";
import {NavLink} from "react-router-dom";
import profile from "../Profile";
import {useAppSelector} from "../../../Redux/reduxStore";
import {getOwnerId} from "../../../Redux/selectors/auth_selectors";
import {Box, Button, Card, CardMedia, Typography} from "@mui/material";

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    follow: boolean
    onFollowProfileChange: (userId: number, follow: boolean) => void
    onPutDialogOnProfileChange: (userId: number) => void
}

const ProfileInfo: FC<PropsType> = (props) => {
    const ownerId = useAppSelector(getOwnerId)
    const defaultPhoto = useAppSelector(state => state.auth.defaultPhoto)
    let [showFullPhoto, setShowFullPhoto] = useState(false)

    useEffect(() => {
        setShowFullPhoto(false)
    }, [props.profile.userId])
    if (!props.profile) {
        return <Preloader/>
    }
    return <Card sx={{
        display: 'flex',
        borderRadius: '5px',
        flexDirection: {xs: 'column', sm: 'row'},
        background: 'rgba(0, 0, 0, 0)'
    }}>
        <CardMedia component='img'
                   image={props.profile.photos.large ? props.profile.photos.large : defaultPhoto}
                   sx={{width: '300px', height: '300px',
                   borderRadius: '5px', m: 'auto'
                   }}
        />
        <Box display='flex' flexDirection='column'>
            <Typography color='#D0D3D4'
                        sx={{m: '10px auto'}}
                        variant={'h4'}
            >
                {props.profile.fullName}
            </Typography>
                <ProfileStatus status={props.status} isOwner={props.isOwner} ownerId={ownerId}
                               userId={props.profile.userId}/>
            <div className={s.editMode}>{(ownerId !== props.profile.userId) && props.isOwner &&
                <button className={props.follow ? s.buttonUnfollow : s.buttonFollow} onClick={() => {
                    props.onFollowProfileChange(props.profile.userId, props.follow)
                }}>{props.follow ? 'Unfollow' : 'Follow'}</button>}
            </div>
            <div className={s.editMode}>{(ownerId !== props.profile.userId) && props.isOwner &&
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
        </Box>
    </Card>
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
            </div>
            {/*}*/}
            <div className={s.aboutMe}><b>About me:</b>{profile.aboutMe}</div>
        </div>
        <div className={s.contacts}>{(!isOwner && editMode) || Object.keys(profile.contacts).filter(i =>
            profile.contacts[i]).map(i => {
            return <Contact key={i} contactTitle={i} contactValue={profile.contacts[i]}/>
        })}</div>
    </div>
}

export default ProfileInfo