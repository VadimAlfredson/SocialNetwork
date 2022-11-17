import {profileApi, usersApi} from "../components/api/api";
import {SetUserData} from "./auth_reducers";
import {createSlice, ThunkAction} from "@reduxjs/toolkit";
import {Dispatch} from "react";
import {AddStateType} from "./reduxStore";

export type ContactsType = {
        github:  string | null,
        vk:  string | null,
        facebook:  string | null,
        instagram:  string | null,
        twitter:  string | null,
        website:  string | null,
        youtube:  string | null,
        mainLink:  string | null
}

export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

export type profilePageType = {
    posts: postsType[],
    newPostText: string
    profile: ProfileType | null
    follow: boolean
}

export type postsType = {
    id: number,
    message: string,
    likeCount: number,
}


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
        profile: {
            userId: null,
            lookingForAJob: null,
            lookingForAJobDescription: null,
            fullName: null,
            contacts: {
                github:  null,
                vk:  null,
                facebook:  null,
                instagram:  null,
                twitter:  null,
                website:  null,
                youtube:  null,
                mainLink:  null
            },
            photos: {
                small: null,
                large: null
            },
            aboutMe: null,
        },
        status: '',
        follow: false,
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

        },
        savePhotoSuccess(state, action) {
            return {
                ...state,
                profile: {...state.profile, photos: action.payload}
            }
        },
        setContacts(state, action) {
            return{
                ...state,
                profile: {...state.profile, contacts: action.payload}
            }
        },
        setFollow(state, action) {
            return {
                ...state,
                follow: action.payload
            }
        }
    }
})

export const {AddPostActionCreator, setUserProfile, setStatus, savePhotoSuccess, setContacts, setFollow} = todosSlice.actions
export default todosSlice.reducer

export const userProfileThunkCreator = (userId: number) => async (dispatch: Dispatch<any>) => {
    let response = await usersApi.userProfile(userId)
    dispatch(setUserProfile(response))
}

export const getStatusThunkCreator = (userId: number) => async (dispatch: Dispatch<any>) => {
    let response = await profileApi.getStatus(userId)
    dispatch(setStatus(response))
}

export const putStatusThunkCreator = (status: string) => async (dispatch: Dispatch<any>) => {
    let response = await profileApi.putStatus(status)
    if (response.resultCode == 0) {
        dispatch(setStatus(status))
    }
}

export const savePhotoTC = (file: any) => async (dispatch: Dispatch<any>) => {
    let response = await profileApi.putPhoto(file)
    if (response.resultCode == 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }
}
export const ProfileThunkCreator = (profile: ProfileType) => async (dispatch: Dispatch<any>) => {
    let response = await profileApi.putProfile(profile)
    if (response.resultCode == 0) {
        dispatch(setContacts(response))
    }
}

export const getFollowThunkCreator = (userId: number) => async (dispatch: Dispatch<any>) => {
    let response = await profileApi.getFollow(userId)
        dispatch(setFollow(response))
}

/*
export default profileReducer;*/
