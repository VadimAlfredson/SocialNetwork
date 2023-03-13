import {profileApi, usersApi} from "../../DAL/api/api";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "react";
import {RootState} from "../reduxStore";
import {setOwnerIconAC} from "./auth_reducers";
import post from "../../components/Profile/MyPosts/Post/Post";


export type PutProfileValuesProps = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string
    }
}
export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
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
    profile: ProfileType
    follow: boolean
    defaultPhoto: string
}

export type postsType = {
    id: number,
    message: string,
    likeCount: number,
    ownerLike: boolean
}



const todosSlice = createSlice({
    name: 'profile',
    initialState: {
        posts: [
                {id: 1, message: 'Стена на бэкенде не предусмотрена, так что это просто болванка', likeCount: 23, ownerLike: false},
                {id: 2, message: 'Yo', likeCount: 12, ownerLike: false},
                {id: 3, message: 'My first post!', likeCount: 32, ownerLike: false},
        ] as Array<postsType>,
        newPostText: ' ' as string,
        profile: {
            userId: 0,
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            contacts: {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: ''
            },
            photos: {
                small: null,
                large: null
            },
            aboutMe: '',
        },
        status: '',
        follow: false,
        defaultPhoto: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
    },
    reducers: {
        AddPostActionCreator(state, action: PayloadAction<string>) {
            let newPost: postsType = {
                id: post.length + 3,
                message: action.payload,
                likeCount: 0,
                ownerLike: false
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        },
        setLikePostActionCreator(state, action: PayloadAction<number>) {
            console.log(action.payload)
            return {
                ...state,
                posts: state.posts.map(post => {
                        if (post.id == action.payload) {
                            return {...post,
                                ownerLike: !post.ownerLike,
                            likeCount: post.ownerLike ? post.likeCount - 1 : post.likeCount + 1
                            }
                        }
                        return post
                    }
                )
            }
        },
        setUserProfile(state, action: PayloadAction<any>) {
            return {
                ...state,
                profile: action.payload
            }
        },
        setStatus(state, action: PayloadAction<string>) {
            return {
                ...state,
                status: action.payload
            }

        },
        savePhotoSuccess(state, action: PayloadAction<any>) {
            return {
                ...state,
                profile: {...state.profile, photos: action.payload}
            }
        },
        setProfileInfo(state, action: PayloadAction<ProfileType>) {
            return {
                ...state,
                profile: {...state.profile, profile: action.payload}
            }
        },
        setFollow(state, action: PayloadAction<boolean>) {
            return {
                ...state,
                follow: action.payload
            }
        },
    }
})

export const {AddPostActionCreator, setUserProfile, setStatus, savePhotoSuccess, setProfileInfo, setFollow, setLikePostActionCreator} = todosSlice.actions
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
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhotoTC = (file: any) => async (dispatch: Dispatch<any>) => {
    let response = await profileApi.putPhoto(file)
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
        dispatch(setOwnerIconAC(response.data.photos.large))
    }
}
export const ProfileThunkCreator = (profile: PutProfileValuesProps) => async (dispatch: Dispatch<any>) => {
    let response = await profileApi.putProfile(profile)
    if (response.resultCode === 0) {
        dispatch(setProfileInfo(response.data))
    }
}

export const getFollowThunkCreator = (userId: number) => async (dispatch: Dispatch<any>) => {
    let response = await profileApi.getFollow(userId)
    dispatch(setFollow(response))
}

export const onFollowProfileChangeThunkCreator = (userId: number, follow: boolean) => async (dispatch: Dispatch<any>) => {
    if (follow == true) {
        let response = await profileApi.deleteFollowing(userId)
        if (response.resultCode === 0) {
            dispatch(setFollow(false))
        }
    } else {
        let response = await profileApi.addFollowing(userId)
        if (response.resultCode === 0) {
            dispatch(setFollow(true))
        }
    }
}
