import React from "react";
import s from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const  MyPostsContainer = (props) => {
   // let state = props.store.getState()
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text) => {
                    let action = updateNewPostActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             posts={store.getState().profilePage.posts}
                             newPostText={store.getState().profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer