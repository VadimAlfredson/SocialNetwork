export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null;
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean,
}

export type UserActionType = FollowedActionType | SetUsersActionType

type FollowedActionType = {
    type: 'FOLLOWED'
    userId: number
}

type SetUsersActionType = {
    type: 'SET_USERS'
    users: UserType[]
}

let initialState = {
    users: [
        /*        {
                    id: 1,
                    followed: false,
                    status: 'Hi',
                    firstName: 'Dmitry',
                    lastName: 'K',
                    photo: 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg',
                    location: {country: 'Belorus', city: 'Minsk'}
                },
                {
                    id: 2,
                    followed: true,
                    status: 'Hello',
                    firstName: 'Masha',
                    lastName: 'A',
                    photo: 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg',
                    location: {country: 'Russia', city: 'Ufa'}
                },
                {
                    id: 3,
                    followed: false,
                    status: 'Hi',
                    firstName: 'Kamilla',
                    lastName: 'F',
                    photo: 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg',
                    location: {country: 'Belorus', city: 'Ufa'}
                }*/
    ] as UserType[]
}

const usersReducer = (state = initialState, action: UserActionType) => {
    switch (action.type) {
        case 'FOLLOWED': {
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: !u.followed}
                        }
                        return u
                    }
                )
            }
        }
        case "SET_USERS": {
            return {
                ...state,
                users: [...action.users]
            }
        }
        default:
            return state

    }
}

export const FollowedActionCreator = (userId: number): UserActionType => ({type: 'FOLLOWED', userId})
export const SetUsersActionCreator = (users: UserType[]): UserActionType => ({type: 'SET_USERS', users})

export default usersReducer