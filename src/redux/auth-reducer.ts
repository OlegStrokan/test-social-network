import {authAPI, ResultCodesEnum, ResultCodesForCaptcha, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA'
const GET_CAPTCHA_URL = 'auth/GET-CAPTCHA-URL'

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}


let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}
const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type){
        case SET_USER_DATA:
        case GET_CAPTCHA_URL: {
            return {...state,  ...action.payload, userId: 32}
        }
        default:
            return state
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}


export const setAuthUserDataSuccess = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null):
    SetAuthUserDataActionType => ({type: SET_USER_DATA, payload: {userId,email, login, isAuth}})


type GetCaptchaActionType = {
    type: typeof GET_CAPTCHA_URL,
    payload: { captchaUrl: string }
}


export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaActionType =>
    ({type: GET_CAPTCHA_URL, payload: {captchaUrl}})

export const setAuthUserData = () => async (dispatch: any) => {
        let meData = await authAPI.me()
        if (meData.resultCode === ResultCodesEnum.Success) {
            let {id, login, email} = meData.data
            dispatch(setAuthUserDataSuccess(id, email, login, true))
        }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData())
    }  else {
        if(data.resultCode === ResultCodesForCaptcha.CaptchaIsRequired){
            dispatch(getCaptchaUrl())
        }

        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataSuccess(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}






export default authReducer
