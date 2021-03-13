import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA'
const GET_CAPTCHA_URL = 'auth/GET-CAPTCHA-URL'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
        case GET_CAPTCHA_URL: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export const setAuthUserDataSuccess = (userId, email, login, isAuth) =>
    ({type: GET_CAPTCHA_URL, payload: {userId,email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaUrl) =>
    ({type: GET_CAPTCHA_URL, payload: {captchaUrl}})

export const setAuthUserData = () => async (dispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserDataSuccess(id, email, login, true))
        }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData())
    }  else {
        if(response.data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }

        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataSuccess(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}






export default authReducer
