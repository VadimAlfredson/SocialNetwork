import {RootState} from "../reduxStore";

export const profile = (state: RootState) => {
    return state.profile.profile
}
export const posts = (state: RootState) => {
    return state.profile.posts
}
export const newPostText = (state: RootState) => {
    return state.profile.newPostText
}
export const status = (state: RootState) => {
    return state.profile.status
}
export const follow = (state: RootState) => {
    return state.profile.follow
}
export const defaultPhoto = (state: RootState) => {
    return state.profile.defaultPhoto
}