import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {AddStateType} from "../../Redux/reduxStore";

/*const FriendsContainer = (props: {friendsList: friendsType}) => {
    friendsList = state.friendsList
    return <Friends/>
}*/

let mapStateToProps = (state: AddStateType) => {
    return {
        friendsList: state.friendsList
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;