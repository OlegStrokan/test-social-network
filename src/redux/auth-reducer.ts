import { ResultCodesEnum, ResultCodesForCaptcha} from "../api/api";
import {ActionTypes, FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Action} from "redux";

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type){
        case 'AUTH/SET-USER-DATA':
        case 'AUTH/GET-CAPTCHA-URL': {
            return {...state,  ...action.payload}
        }
        default:
            return state
    }
}

export const actions = {
    setAuthUserDataSuccess: (userId: number | null, email: string | null, login: string | null, isAuth: boolean)=>
        ({type: 'AUTH/SET-USER-DATA', payload: {userId,email, login, isAuth}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({type: 'AUTH/GET-CAPTCHA-URL', payload: {captchaUrl}} as const)
}

export const setAuthUserData = (): ThunkType => async (dispatch: any) => {
        let meData = await authAPI.me()
        if (meData.resultCode === ResultCodesEnum.Success) {
            let {id, login, email} = meData.data
            dispatch(actions.setAuthUserDataSuccess(id, email, login, true))
        }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch: any) => {
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

export const logout = (): ThunkType => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserDataSuccess(null, null, null, false))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch: any) => {
    let data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>


