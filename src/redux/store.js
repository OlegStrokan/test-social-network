import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

    },
    _callSubscriber() {
        console.log('State was changed')
    },

    // подписаться и получить state
    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },

    // изменить state
    dispatch(action) {
        // отдаем часть стейта, который адресован именно этому reducer
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

window.store = store
export default store
