import React, {FC, useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {RootState, useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {
    followed,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleIsFollowing,
    getUsersThunkCreator,
    onChangeUsersThunkCreator,
    onFollowChangeThunkCreator, UserType,
} from "../../Redux/users_reducers";
import {compose} from "redux";
import {putDialogUserThunkCreator} from "../../Redux/dialogs_reducer";


const UsersContainer: FC<{}> = (props) => {
    const dispatch = useAppDispatch()
    const pageSize =  useAppSelector(state => state.users.pageSize)
    const currentPage = useAppSelector(state => state.users.currentPage)
    /*useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize))}, []
    )*/



        return <>
            <Users
            />
        </>


}

export default UsersContainer