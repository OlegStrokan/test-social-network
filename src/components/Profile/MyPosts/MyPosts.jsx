import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    const postsElements = props.posts
        .map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostActionCreator(text)
        props.dispatch(action)
    }
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
           <div><textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}>

           </textarea></div>
            <button onClick={addPost}>Add Post</button>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
        </div>
    );
}

export default MyPosts