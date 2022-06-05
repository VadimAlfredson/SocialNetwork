let store = {

    state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Danil'},
                {id: 3, name: 'Rail'},
                {id: 4, name: 'Artur'},
                {id: 5, name: 'Nikita'}
            ],

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
            ],
            addNewMessage: ''
        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 23},
                {id: 2, message: 'Yo', likeCount: 12},
                {id: 3, message: 'My first post!', likeCount: 32},
            ],
            newPostText: '',
        },

        friendsList: {
            friends: [
                {
                    id: 1,
                    name: 'Alex',
                    photo: 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
                },
                {
                    id: 2,
                    name: 'Nikita',
                    photo: document.img = 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
                },
                {
                    id: 3,
                    name: 'Kamila',
                    photo: document.img = 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
                },
                {
                    id: 4,
                    name: 'Pavel',
                    photo: document.img = 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
                },
                {
                    id: 5,
                    name: 'Danil',
                    photo: document.img = 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
                },
            ]
        }
    },

    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this.state
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this.state.profilePage.newPostText,
                likeCount: 0,
            };

            this.state.profilePage.posts.push(newPost);
            this.state.profilePage.newPostText = '';
            this._callSubscriber(this.state);
        } else if (action.type === 'UPDATE-POST-TEXT') {
            this.state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.state);
        } else if (action.type === 'UPDATE-MESSAGE-IN-DIALLOGS') {
            this.state.dialogsPage.addNewMessage = action.newMessage;
            this._callSubscriber(this.state);
        } else if (action.type === 'ADD_MESSAGE-IN-DIALLOGS') {
            let newMessage = {
                id: 5,
                message: action.NewMessageInDialogs,
                icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
            };
            this.state.dialogsPage.messages.push(newMessage);
            this.state.dialogsPage.addNewMessage = '';
            this._callSubscriber(this.state)
        }
    }
}

export const AddPostActionCreator = ({type: 'ADD-POST'})

export const UpdatePostTextActionCreator = (text) => ({type: 'UPDATE-POST-TEXT', newText: text})

export const AddMessageIDialogsActoinCreator = (text) => ({type: 'ADD_MESSAGE-IN-DIALLOGS', NewMessageInDialogs: text})

export const UpdateMessageInDialogsActionCreator = () => ({type: 'UPDATE-MESSAGE-IN-DIALLOGS'})

export default store