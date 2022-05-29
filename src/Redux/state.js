import {rerenderEntireTree} from "../rerender";

let state = {
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
    },

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 23},
            {id: 2, message: 'Yo', likeCount: 12},
            {id: 3, message: 'My first post!', likeCount: 32},
        ]
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
};

export let AddPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0,
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export let AddMessageInDialogs = (NewMessageInDialogs) => {
    let newMessage = {
        id: 5,
        message: NewMessageInDialogs,
        icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
    };
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state)
};

export default state