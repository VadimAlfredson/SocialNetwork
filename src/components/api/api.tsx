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
    }

}