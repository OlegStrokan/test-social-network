import {InferActionsTypes} from "./redux-store";

type DialogType = {
    id: number,
    name: string,
}
type MessageType = {
    id: number,
    message: string,
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'It is your first project?'},
        {id: 4, message: 'Maybe I will call you later...'},
        {id: 5, message: 'Yo'}
    ] as Array<MessageType>
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'dialogs/SEND-MESSAGE':
            let body = action.newMessageBody
            return{
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({type: 'dialogs/SEND-MESSAGE', newMessageBody} as const)
}

export default dialogsReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>