import React from 'react'
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUser([
                {
                    id: 1,
                    followed: false,
                    imgUrl: 'https://pbs.twimg.com/profile_images/890611271028137984/_5xAXOi-_400x400.jpg',
                    fullName: 'Oleg',
                    status: 'I am a boss',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 2,
                    followed: true,
                    imgUrl: 'https://pbs.twimg.com/profile_images/890611271028137984/_5xAXOi-_400x400.jpg',
                    fullName: 'Tom',
                    status: 'I am a boss too',
                    location: {city: 'Los Angeles', country: 'USA'}
                },
                {
                    id: 3,
                    followed: false,
                    imgUrl: 'https://pbs.twimg.com/profile_images/890611271028137984/_5xAXOi-_400x400.jpg',
                    fullName: 'Jack',
                    status: 'I am a boss too',
                    location: {city: 'London', country: 'UK'}
                },
            ]
        )
    }
    return  <div>
        {
            props.users.map( u => <div key={u.id}>
               <span>
                   <div>
                       <img src={u.imgUrl} className={styles.img}/>
                   </div>
                   <div>
                       { u.followed
                           ? <button onClick={() => {props.unfollow(u.id)}}>Follow</button>
                           : <button onClick={() => {props.follow(u.id)}}>Unfollow</button>
                       }
                   </div>
               </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users