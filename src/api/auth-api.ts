import {instance, APIResponseType, ResultCodesEnum, ResultCodesForCaptcha} from "./api";


export type MeResponseDataType = {
    id: number,
    email: string,
    login: string
}

export type LoginResponseType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseType, ResultCodesEnum | ResultCodesForCaptcha>>(`auth/login`,{email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}