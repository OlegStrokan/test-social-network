import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'



const MyPosts = (props) => {

    const postsElements = props.posts
        .map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
           <div><textarea>

           </textarea></div>
            <button>Add Post</button>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
        </div>
    );
}

export default MyPosts