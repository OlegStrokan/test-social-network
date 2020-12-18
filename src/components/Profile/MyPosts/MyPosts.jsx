import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    const postsElements = props.posts
        .map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef()

    const onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        // let action = updateNewPostActionCreator(text)
        // props.dispatch(action)
    }
    return (
        <div className={s.postsBlock}>
            <div className={s.bgColor}>
            My posts
           <div><textarea className="form-control"  rows="3" onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}>

           </textarea></div>
            <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts