import axios from "axios";
import {authMeResponse} from "./apiTypes";
import {ProfileType, PutProfileValuesProps} from "../../Redux/profile_reducer";
import {setSubscriptions} from "../../Redux/subscriptions_reducers";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1ac9e29d-59a9-47e9-9ac8-79262136abea"
    }
})

export const usersApi = {
    getUsers: (currentPage: number, pageSize: number, term: string, friends?: boolean) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}${ friends ? "&friend=" + friends : ''}`)
            .then(response => {
                return response.data
            })
    },

    unfollowUser: (userId: number) => {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    followedUser: (userId: number) => {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    userProfile: (userId: number) => {
        console.warn('Obsolete method. Please profileApi object')
        return profileApi.userProfile(userId)
    }
}

export const subscriptionsApi = {
    getSubscriptions: (friend: boolean) => {
        return instance.get(`users?friend=${friend}&count=9`)
            .then(response => {
                return response.data
            })
    },
}

export const profileApi = {
    userProfile: (userId: number) => {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus: (userId: number) => {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    putStatus: (status: string) => {
        return instance.put('profile/status', {status: status})
            .then(response => {
                return response.data
            })
    },
    putPhoto: (photoFile: any) => {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(response => {
                return response.data
            })
    },
    putProfile: (profile: PutProfileValuesProps) => {
        return instance.put('profile', profile)
            .then(response => {
                return response.data
            })
    },
    getFollow: (userId: number) => {
        return instance.get(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    deleteFollowing: (userId: number) => {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    addFollowing: (userId: number) => {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
}

export const authApi = {
    loginAuth: () => {
        return instance.get<authMeResponse>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login: (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) => {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => {
                return response.data
            })
    },
    logout: () => {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    },
    captchaURL: () => {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                return response.data
            })
    },
}


export const dialogsApi = {
    getDialogs: () => {
        return instance.get('dialogs')
            .then(response => {
                return response.data
            })
    }, /*get all dialogs*/
    putDialogUser: (userId: number) => {
        debugger
        return instance.put(`dialogs/${userId}`)
            .then(response => {
                return response.data
            })
    }, /*start chatting, refresh your companion so that he was on top*/
    getMessagesUser: (userId: number) => {
        return instance.get(`dialogs/${userId}/messages`)
            .then(response => {
                return response.data
            })
    }, /*get list of messages with your friend*/
    postMessageToUser: (userId: number, bodyMessage: string) => {
        return instance.post(`dialogs/${userId}/messages`, {body: bodyMessage})
            .then(response => {
                return response.data
            })
    }, /*send message to your friend*/
    getMessageViewed: (messageId:number) => {
        return instance.get(`dialogs/messages/${messageId}/viewed`)
            .then(response => {
                return response.data
            })
    } /*is your message viewed*/ ,
    postSpamMessage: (messageId: number) => {
        return instance.post(`dialogs/messages/${messageId}/spam`)
            .then(response => {
                return response.data
            })
    } /*spam*/,
    deleteMessage: (messageId: number) => {
        return instance.delete(`dialogs/messages/${messageId}`)
            .then(response => {
                return response.data
            })
    } /*delete only for you, not for your companion*/,
    putRestoreMessage: (messageId: number) => {
        return instance.put(`dialogs/messages/${messageId}/restore`)
            .then(response => {
                return response.data
            })
    } /*restore your message form deleted and spam*/,
    returnMessage: (userId: number, date: string) => {
        return instance.get(`dialogs/${userId}/messages/new?newerThen=${date}`)
            .then(response => {
                return response.data
            })
    } /*return messages newer than date*/,
    getMessagesCount: (count:number) => {
        return instance.get(`dialogs/messages/new/count`)
            .then(response => {
                return response.data
            })
    } /*list of new messages*/,
}