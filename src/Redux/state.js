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
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'message'},
            {id: 4, message: 'message'},
        ],
    },

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 23},
            {id: 2, message: 'Yo', likeCount: 12},
            {id: 3, message: 'My first post!', likeCount: 32},
        ]
    },
}

export default state