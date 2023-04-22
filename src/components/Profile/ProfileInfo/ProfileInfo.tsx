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
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import RateReviewIcon from '@mui/icons-material/RateReview';

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
        background: 'rgba(0, 0, 0, 0)',
        gap: 1,
        flexGrow: 1
    }}><Box display={'flex'} flexDirection={'column'}>
        <CardMedia component='img'
                   image={props.profile.photos.large ? props.profile.photos.large : defaultPhoto}
                   sx={{width: '300px', height: '300px',
                   borderRadius: '5px', m: 'auto'
                   }}
        />
        <Box display={'flex'}
             flexDirection={'row'}
             m={'5px auto'} width={'300px'}
             gap={'5px'}

        >{(ownerId !== props.profile.userId) && props.isOwner &&
            <Button
                color={props.follow ? 'info' : 'warning'}
                variant={props.follow ? 'outlined' : 'contained'}
                onClick={() => {
                    props.onFollowProfileChange(props.profile.userId, props.follow)
                }}>{props.follow ? <PersonRemoveIcon /> : <PersonAddIcon />}</Button>}

            {(ownerId !== props.profile.userId) && props.isOwner &&
                <Button
                    color={'info'}
                    variant={'contained'}
                    startIcon={<RateReviewIcon />}
                    fullWidth={true}
                    onClick={() => {
                    props.onPutDialogOnProfileChange(props.profile.userId)
                }}>Write new message</Button>}
        </Box>
    </Box>
        <Box display='flex' flexDirection='column'
             sx={{flexGrow: 1}} width={'100%'} >
            <Typography color='#D0D3D4'
                        sx={{m: '10px auto'}}
                        variant={'h5'}
            >
                {props.profile.fullName}
            </Typography>
                <ProfileStatus status={props.status} isOwner={props.isOwner} ownerId={ownerId}
                               userId={props.profile.userId}/>

                <Information
                    profile={props.profile}
                    isOwner={props.isOwner}
                />
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
    return <Box color={'#D0D3D4'}>
        <div>
            <div>
                <div><b>looking for a job:</b> {profile.lookingForAJob ? "yes" : 'no'}</div>
                {profile.lookingForAJob &&
                    <div><b>looking for a job description:</b> {profile.lookingForAJobDescription}</div>}
            </div>
            {/*}*/}
            <div className={s.aboutMe}><b>About me:</b>{profile.aboutMe}</div>
        </div>
        <div className={s.contacts}>{Object.keys(profile.contacts).filter(i =>
            profile.contacts[i]).map(i => {
            return <Contact key={i} contactTitle={i} contactValue={profile.contacts[i]}/>
        })}</div>
    </Box>
}

export default ProfileInfo