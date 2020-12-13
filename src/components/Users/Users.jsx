import React from 'react'
import styles from './users.module.css'


let Users = (props) => {
    debugger
    let url = 'https://cdn.images.express.co.uk/img/dynamic/35/590x/Queen-Brian-May-reveals-Freddie-Mercury-fought-with-another-superstar-1138134.jpg?r=1560033141259'
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: url, followed: false, fullName: 'Oleg', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 2, photoUrl: url, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moskow', country: 'Russia'}},
            {id: 3, photoUrl: url, followed: false, fullName: 'Alex', status: 'I am a boss too', location: {city: 'Minks', country: 'Belarus'}}
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {props.unfollow(u.id)}}>UnFollow</button> :
                            <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
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