import axios from "axios";
import {authMeResponse} from "./apiTypes";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1ac9e29d-59a9-47e9-9ac8-79262136abea"
    }
})

export const usersApi = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    getUsers2: (pageNumber: number, pageSize: number) => {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
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
        return instance.put('profile/status',  {status: status})
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
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post(`auth/login`, { email, password, rememberMe })
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
}