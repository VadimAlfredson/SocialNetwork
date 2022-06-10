type dialogsType = {
    id: number,
    name: string
}

type messagesType = {
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
    addNewMessage: '' as string
};

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'UPDATE-MESSAGE-IN-DIALOGS': {
            let newMessage = {
                id: 5,
                message: action.NewMessageInDialogs,
                icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
            };
            state.messages.push(newMessage);
            state.addNewMessage = '';
            return state;
        }
        case 'ADD_MESSAGE-IN-DIALOGS': {
            state.addNewMessage = action.newMessage;
            return state;
        }
        default:
            return state;
    }
}
export const UpdateMessageInDialogsActionCreator = (text: string) => ({
    type: 'UPDATE-MESSAGE-IN-DIALOGS',
    NewMessageInDialogs: text
})
export const AddMessageIDialogsActionCreator = () => ({type: 'ADD_MESSAGE-IN-DIALOGS'})

export default dialogsReducer;