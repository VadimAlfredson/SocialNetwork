export type UserType = {
    id: number,
    followed:boolean,
    firstName: string,
    lastName: string
    location: {
        country: string
        city: string
    }
}

export type UserActionType = {
    type: 'FOLLOWED' | 'SETUSERS'
    userId?: any
}

let initialState = {
    users: [
/*        {id: 1, followed: false, firstName: 'Dmitry', lastName: 'K', location: {country: 'Belorus', city: 'Minsk'}},
        {id: 2, followed: false, firstName: 'Masha', lastName: 'A', location: {country: 'Russia', city: 'Ufa'}},
        {id: 3, followed: false, firstName: 'Kamilla', lastName: 'F', location: {country: 'Belorus', city: 'Ufa'}}*/
    ] as UserType[]
}

const usersReducer = (state = initialState, action: UserActionType) => {
    switch (action.type) {
        case 'FOLLOWED': {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    }
                )
            }
        }
        case "SETUSERS": {
            return {
                ...state,
                users: [...state.users, ...action.users ]
            }
        }
        default:
            return state

    }
}

export const FollowedActionCreator: () => UserActionType = () => ({type: 'FOLLOWED', userId})
export const SetUsersActionCreator: () => UserActionType = () => ({type: 'SETUSERS', users})

export default usersReducer