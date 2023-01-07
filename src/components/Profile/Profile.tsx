import React, {FC} from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../Redux/profile_reducer";
import s from "./Profile.module.css"

type PropsType = {
    profile: ProfileType
    putStatusThunkCreator: () => void
    status: string
    isOwner: boolean
    savePhotoTC: ({}) => void
    follow: boolean
    onFollowProfileChange: (userId: number, follow: boolean) => void
    onPutDialogOnProfileChange: (userId: number) => void
}

const Profile: FC<PropsType> = (props) => {
    return <div className={s.profileContent}>
        <div className={s.profileInfo}>
        <ProfileInfo savePhotoTC={props.savePhotoTC}
                     isOwner={props.isOwner}
                     profile={props.profile}
                     putStatusThunkCreator={props.putStatusThunkCreator}
                     status={props.status}
                     follow={props.follow}
                     onFollowProfileChange={props.onFollowProfileChange}
                     onPutDialogOnProfileChange={props.onPutDialogOnProfileChange}
        />
        </div>
        <div className={s.profilePost}>
        <MyPostsContainer />
        </div>
    </div>
}

export default Profile