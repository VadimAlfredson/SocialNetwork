import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {AddStateType} from "../../Redux/reduxStore";

let mapStateToProps = (state: AddStateType) => {
    return {
        friends: state.friendsList.friends
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;