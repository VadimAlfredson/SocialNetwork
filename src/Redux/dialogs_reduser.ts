export type dialogsType = {
    id: number,
    name: string
}

export type messagesType = {
    id: number,
    message: string,
    icon: string,
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Danil'},
        {id: 3, name: 'Rail'},
        {id: 4, name: 'Artur'},
        {id: 5, name: 'Nikita'}
    ] as Array<dialogsType>,

    messages: [
        {
            id: 1,
            message: 'Hi',
            icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
        },
        {
            id: 2,
            message: 'How are you?',
            icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
        },
        {
            id: 3,
            message: 'message',
            icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
        },
        {
            id: 4,
            message: 'message',
            icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
        },
    ] as Array<messagesType>,
    addNewMessage: '' as string,
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE-IN-DIALOGS': {
            let newMessage = {
                id: 5,
                message: state.addNewMessage,
                icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
            };
            state.messages.push(newMessage);
            state.addNewMessage = '';
            return state;
        }
        case 'UPDATE-MESSAGE-IN-DIALOGS': {
            state.addNewMessage = action.newMessage;
            return state;
        }
        default:
            return state;
    }
}

export const AddMessageIDialogsActionCreator = () => ({type: 'ADD_MESSAGE-IN-DIALOGS'})
export const UpdateMessageInDialogsActionCreator = (text: string) => ({
    type: 'UPDATE-MESSAGE-IN-DIALOGS',
    newMessage: text
})

export default dialogsReducer;

/*const profileReducer = (state = initialState, action: any) => {
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
export const UpdatePostTextActionCreator = (text: string) => ({type: 'UPDATE-POST-TEXT', newText: text})*/