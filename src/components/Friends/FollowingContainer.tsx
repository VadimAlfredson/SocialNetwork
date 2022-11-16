import React from 'react';
import Following from "./Following";
import {connect} from "react-redux";
import {AddStateType} from "../../Redux/reduxStore";
import {
    UserType,
    getFollowingThunkCreator,
} from "../../Redux/users_reducers";
import Preloader from "../common/Preloader/Preloader";
import {withAuthNavigate} from "../hoc/witAuthNavigate";
import {compose} from "redux";
import {
    getFollowing,
    getIsAuth,
} from "../../Redux/users_selectors";

type PropsType = {
    isFetching: boolean
    following: Array<UserType>
    getFollowingThunkCreator: (friend: boolean) => void
    isAuth: boolean
}


class FollowingContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getFollowingThunkCreator(true)
    }

    /*componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if (this.props.router.params.userId != prevProps.router.params.userId) {this.refreshProfile()}
    }*/

    render(): React.ReactNode {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Following
                following={this.props.following}
            />;
        </>
    }

}

let mapStateToProps = (state: AddStateType) => {
    return {
        following: getFollowing(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(
    withAuthNavigate,
    connect(mapStateToProps,
        {
            getFollowingThunkCreator,
        })
)(FollowingContainer);