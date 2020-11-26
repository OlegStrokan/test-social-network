import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    const postsData = [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ]
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
           <div><textarea></textarea></div>
            <button>Add Post</button>

            <div className={s.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>

            </div>
        </div>
        </div>
    );
}

export default MyPosts