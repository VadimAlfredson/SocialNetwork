type friendsType = {
    id: number,
    name: string,
    photo: string
}

let initialState = {
    friends: [
        {
            id: 1,
            name: 'Alex',
            photo: 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
        },
        {
            id: 2,
            name: 'Nikita',
            photo: 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
        },
        {
            id: 3,
            name: 'Kamila',
            photo: 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
        },
        {
            id: 4,
            name: 'Pavel',
            photo: 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
        },
        {
            id: 5,
            name: 'Danil',
            photo: 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
        },
    ] as Array<friendsType>
};

let friendsReducer = (state = initialState, action: any) => {
    return state
}

export default friendsReducer;