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
    newPostText: '' as string,
}

type ProfileReducerAction = {
   type: 'ADD-POST' | 'UPDATE-POST-TEXT'
    newText: string
}

const profileReducer = (state = initialState, action: ProfileReducerAction) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: postsType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case 'UPDATE-POST-TEXT':
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}
export const AddPostActionCreator = () => ({type: 'ADD-POST'})
export const UpdatePostTextActionCreator = (text: string):ProfileReducerAction => ({type: 'UPDATE-POST-TEXT', newText: text})


export default profileReducer;