import React, {FC, useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {RootState, useAppSelector} from "../../Redux/reduxStore";
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

type PropsType = {
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onChangeUsersThunkCreator: (pageNumber: number, pageSize: number, term: string, friend?: boolean) => void
    onFollowChangeThunkCreator: (userId: number, follow: boolean) => void
    putDialogUserThunkCreator: (userId: number) => {}
}


const UsersContainer: FC<PropsType> = (props) => {
    const pageSize =  useAppSelector(state => state.users.pageSize)
    const currentPage = useAppSelector(state => state.users.currentPage)
    useEffect(() => {
        props.getUsersThunkCreator(currentPage, pageSize)}, []
    )

    let onUsersChange = (pageNumber: number, pageSize: number, term: string, friend?: boolean) => {
        props.onChangeUsersThunkCreator(pageNumber, pageSize, term, friend)
    }

    let onFollowChange = (userId: number, follow: boolean) => {
        props.onFollowChangeThunkCreator(userId, follow)
    }

    let onDialogUserChange = (userId: number) => {
        props.putDialogUserThunkCreator(userId)
    }

        return <>
            <Users
                onUsersChange={onUsersChange}
                onFollowChange={onFollowChange}
                onDialogUserChange={onDialogUserChange}
            />
        </>


}

let mapStateToProps = (state: RootState) => {
    return {
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getUsersThunkCreator,
            onChangeUsersThunkCreator,
            onFollowChangeThunkCreator,
            putDialogUserThunkCreator,
        })
)(UsersContainer)