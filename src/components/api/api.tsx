import * as axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1ac9e29d-59a9-47e9-9ac8-79262136abea"
    }
})

export const usersApi = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data
            })
    },

    getUsers2: (pageNumber, pageSize) => {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(responce => {
                return responce.data
            })
    },

    unfollowUser: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(responce => {
                return responce.data
            })
    },

    followedUser: (userId) => {
        return instance.post(`follow/${userId}`)
            .then(responce => {
                return responce.data
            })
    },
    userProfile: (userId) => {
        console.warn('Obsolete method. Please profileApi object')
        return profileApi.userProfile(userId)
    }
}

export const profileApi = {
    userProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(responce => {
                return responce.data
            })
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
            .then(responce => {
                return responce.data
            })
    },
    putStatus: (status) => {
        return instance.put('profile/status',  {status: status})
            .then(responce => {
                return responce.data
            })
    },
}

export const authApi = {
    loginAuth: () => {
        return instance.get(`auth/me`)
            .then(responce => {
                return responce.data
            })
    },
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post(`auth/login`, { email, password, rememberMe })
            .then(responce => {
                return responce.data
            })
    },
    logout: () => {
        return instance.delete(`auth/login`)
            .then(responce => {
                return responce.data
            })
    },
}