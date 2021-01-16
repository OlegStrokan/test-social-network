import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9cb62e1b-d2a5-4130-bd00-d3e8ccf1758e"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1,pageSize = 10) {
        return instanse.get(`users?page=
            ${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId){
        return instanse.post(`follow/${userId.id}`)

    },
    unfollow(userId){
        return instanse.delete(`follow/${userId.id}`)
    }
}


