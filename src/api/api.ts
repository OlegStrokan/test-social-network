import axios from "axios";
import {ProfileType, UserType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "131ca82f-6316-4474-bd95-2f18cb414f85"
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodesForCaptcha {
    CaptchaIsRequired = 10
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export type GetUsersItems = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

