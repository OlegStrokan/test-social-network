import {usersAPI, authAPI} from "../api/api";
import {toggleFollowingProgress, unfollowSuccess} from "./users-reducer";

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA: {
            return {
                ...state,
                // в экшене будет лежать data, где будет { userId,email,login }
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUserDataSuccess = (userId, email, login) =>
    ({type: SET_USER_DATA, data: {userId,email, login}})

export const setAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserDataSuccess(id, email, login))
            }
        })
    }
}

export default authReducer
