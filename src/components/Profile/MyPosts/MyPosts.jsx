import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component="textarea" placeholder="Enter your post message"/>
        </div>
        <button>Add Post</button>
    </form>;
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = (props) => {
    const postsElements = props.posts
        .map((p) => <Post message={p.message} likesCount={p.likesCount}/>)


    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.bgColor}>
                <h3>My post</h3>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}


export default MyPosts