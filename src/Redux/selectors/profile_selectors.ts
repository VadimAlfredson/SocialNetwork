import {RootState} from "../reduxStore";

export const getProfile = (state: RootState) => {
    return state.profile.profile
}
export const getPosts = (state: RootState) => {
    return state.profile.posts
}
export const getNewPostText = (state: RootState) => {
    return state.profile.newPostText
}
export const getStatusProfile = (state: RootState) => {
    return state.profile.status
}
export const getFollow = (state: RootState) => {
    return state.profile.follow
}