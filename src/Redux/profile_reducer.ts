import {profileApi, usersApi} from "../components/api/api";
import {SetUserData} from "./auth_reducers";
import {createSlice} from "@reduxjs/toolkit";


export type profilePageType = {
    posts: postsType[],
    newPostText: string
    profile: null | string
}

export type postsType = {
    id: number,
    message: string,
    likeCount: number,
}

export type ProfileType = ProfileReducerAction | setUserProfile

export type ProfileReducerAction = {
    type: 'ADD-POST' | 'UPDATE-POST-TEXT'
    newText?: string

}
export type setUserProfile = {
    type: 'SET_USER_PROFILE'
    profile: null | any

}

/*let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 23},
        {id: 2, message: 'Yo', likeCount: 12},
        {id: 3, message: 'My first post!', likeCount: 32},
    ] as Array<postsType>,
    newPostText: ' ' as string,
    profile: null
}



let i: number = 5


const profileReducer = (state = initialState, action: ProfileType) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: postsType = {
                id: i++,
                message: state.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        }
        case 'UPDATE-POST-TEXT': {
            if (action.newText != null) {
                state.newPostText = action.newText;
            }
            return {
                ...state,
                posts: [...state.posts]
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}
export const AddPostActionCreator = (): ProfileType => ({type: 'ADD-POST'})
export const UpdatePostTextActionCreator = (text: string): ProfileType => ({
    type: 'UPDATE-POST-TEXT',
    newText: text
})
export const setUserProfile = (profile: any): ProfileType => ({type: 'SET_USER_PROFILE', profile})*/

let i: number = 5

const todosSlice = createSlice({
    name: 'profile',
    initialState: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 23},
            {id: 2, message: 'Yo', likeCount: 12},
            {id: 3, message: 'My first post!', likeCount: 32},
        ] as Array<postsType>,
        newPostText: ' ' as string,
        profile: null,
        status: '',
    },
    reducers: {
        AddPostActionCreator(state, action) {
            let newPost: postsType = {
                id: i++,
                message: action.payload,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        },
/*        UpdatePostTextActionCreator(state, action) {
            if (action != null) {
                state.newPostText = action.payload;
            }
        },*/
        setUserProfile(state, action) {
            return {
                ...state,
                profile: action.payload
            }
        },
        setStatus(state, action) {
            return {
                ...state,
                status: action.payload
            }

        }
    }
})

export const {AddPostActionCreator, UpdatePostTextActionCreator, setUserProfile, setStatus} = todosSlice.actions
export default todosSlice.reducer

export const userProfileThunkCreator = (userId: number) => {
    return (dispatch) => {
        usersApi.userProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatusThunkCreator = (userId: number) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const putStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileApi.putStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
                })
    }
}

/*
export default profileReducer;*/
