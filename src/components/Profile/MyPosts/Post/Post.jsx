import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://movie4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"/>
            <div>
                <span>{props.message}</span>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    )
}

export default Post