import React, {FC} from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postsType, ProfileType} from "../../Redux/profile_reducer";
import s from "./Profile.module.css"

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    follow: boolean
    onFollowProfileChange: (userId: number, follow: boolean) => void
    onPutDialogOnProfileChange: (userId: number) => void
}



const Profile: FC<PropsType> = (props) => {
    return <div className={s.profileContent}>
        <div className={s.profileInfo}>
        <ProfileInfo
                     isOwner={props.isOwner}
                     profile={props.profile}
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