const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {

    _state: {
        profilePage: {
            posts: [
                {id:  1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'It is your first project?'},
                {id: 4, message: 'Maybe I will call you later...'},
                {id: 5, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ]
        },
        sidebar: {}
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
    dispath(action){
        if (action.type === 'ADD-POST'){
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            // добавляем новый пост в state
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    },
}
export const addPostActionCreator = () => ({type: ADD_POST})

    export const updateNewPostActionCreator = (text) =>
        ({type: UPDATE_NEW_POST_TEXT,newText: text})

window.store = store
export default store
