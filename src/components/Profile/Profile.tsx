import React, {FC} from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postsType, ProfileType} from "../../Redux/reducers/profile_reducer";
import s from "./Profile.module.css"
import { Box } from '@mui/material';

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    follow: boolean
    onFollowProfileChange: (userId: number, follow: boolean) => void
    onPutDialogOnProfileChange: (userId: number) => void
}



const Profile: FC<PropsType> = (props) => {
    return <Box display={'flex'} flexGrow={1} flexDirection={'column'}>
        <ProfileInfo
                     isOwner={props.isOwner}
                     profile={props.profile}
                     status={props.status}
                     follow={props.follow}
                     onFollowProfileChange={props.onFollowProfileChange}
                     onPutDialogOnProfileChange={props.onPutDialogOnProfileChange}
        />

        <MyPostsContainer />
    </Box>
}

export default Profile