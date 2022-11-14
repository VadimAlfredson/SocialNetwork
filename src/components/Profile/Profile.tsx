import React, {FC} from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
    profile: any | null
    putStatusThunkCreator: () => void
    status: string
    isOwner: boolean
    savePhotoTC: ({}) => void
}

const Profile: FC<PropsType> = (props) => {
    return <div>
        <ProfileInfo savePhotoTC={props.savePhotoTC}
                     isOwner={props.isOwner}
                     profile={props.profile}
                     putStatusThunkCreator={props.putStatusThunkCreator}
                     status={props.status}
        />
        <MyPostsContainer />
    </div>
}

export default Profile