const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
        posts: [
            {id:  1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
        ],
        newPostText: 'it-kamasutra.com',
        profile: null
}
const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            // добавляем новый пост в state
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state,
                newPostText: action.newText
            }
            return stateCopy
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer