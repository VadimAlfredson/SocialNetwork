export type postsType = {
    id: number,
    message: string,
    likeCount: number,
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 23},
        {id: 2, message: 'Yo', likeCount: 12},
        {id: 3, message: 'My first post!', likeCount: 32},
    ] as Array<postsType>,
    newPostText: ' ' as string,
}

export type ProfileReducerAction = {
   type: 'ADD-POST' | 'UPDATE-POST-TEXT'
    newText?: string

}

let i:number = 5


const profileReducer = (state = initialState, action: ProfileReducerAction) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: postsType = {
                id: i++,
                message: state.newPostText,
                likeCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case 'UPDATE-POST-TEXT':
            if (action.newText != null) {
                state.newPostText = action.newText;
            }
            return state;

        default:
            return state;
    }
}
export const AddPostActionCreator = ():ProfileReducerAction => ({ type: 'ADD-POST' })
export const UpdatePostTextActionCreator = (text: string):ProfileReducerAction => ({type: 'UPDATE-POST-TEXT', newText: text})


export default profileReducer;