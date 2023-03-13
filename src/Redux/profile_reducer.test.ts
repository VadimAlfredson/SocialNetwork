import profile_reducer, {AddPostActionCreator, postsType} from "./reducers/profile_reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 23},
        {id: 2, message: 'Yo', likeCount: 12},
        {id: 3, message: 'My first post!', likeCount: 32},
    ] as Array<postsType>
}

it ('Test: new post should be added', () => {
    let action = AddPostActionCreator('Test');
    // @ts-ignore
    let newState = profile_reducer(state, action);
    expect(newState.posts.length).toBe(4);
    expect(newState.posts[0].message).toBe('Test')
    expect(newState.posts[0].id).toBe(5)
})

