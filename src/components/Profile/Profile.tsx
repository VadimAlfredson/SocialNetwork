import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} putStatusThunkCreator={props.putStatusThunkCreator} status={props.status}/>
        <MyPostsContainer />
    </div>
}

export default Profile