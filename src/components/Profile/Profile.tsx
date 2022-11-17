import React, {FC} from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../Redux/profile_reducer";

type PropsType = {
    profile: ProfileType
    putStatusThunkCreator: () => void
    status: string
    isOwner: boolean
    savePhotoTC: ({}) => void
    follow: boolean
}

const Profile: FC<PropsType> = (props) => {
    return <div>
        <ProfileInfo savePhotoTC={props.savePhotoTC}
                     isOwner={props.isOwner}
                     profile={props.profile}
                     putStatusThunkCreator={props.putStatusThunkCreator}
                     status={props.status}
                     follow={props.follow}
        />
        <MyPostsContainer />
    </div>
}

export default Profile