export type dialogsPageType = {
    dialogs: dialogsType[],
    messages: messagesType[],
    addNewMessage: string,
}

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

export type dialogsReducerAction = {
    type: 'ADD-MESSAGE-IN-DIALOGS' | 'UPDATE-MESSAGE-IN-DIALOGS'
    newMessage?: string
}

let j: number = 5

const dialogsReducer = (state = initialState, action: dialogsReducerAction) => {
    switch (action.type) {
        case 'ADD-MESSAGE-IN-DIALOGS': {
            let newMessage = {
                id: j++,
                message: state.addNewMessage,
                icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
            };
            state.messages.push(newMessage);
            state.addNewMessage = '';
            return state;
        }
        case 'UPDATE-MESSAGE-IN-DIALOGS': {
            if (action.newMessage != null) {
                state.addNewMessage = action.newMessage;
            }
            return state;
        }
        default:
            return state;
    }
}

export const AddMessageIDialogsActionCreator = () => ({type: 'ADD-MESSAGE-IN-DIALOGS'})
export const UpdateMessageInDialogsActionCreator = (text: string): dialogsReducerAction => ({
    type: 'UPDATE-MESSAGE-IN-DIALOGS',
    newMessage: text
})

export default dialogsReducer;