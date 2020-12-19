import React from 'react'
import * as axios from 'axios'
import s from "./users.module.css";
import userPhoto from "../../assets/images/img.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // установил 10, чтобы была фиксированная шинина страницы
    let pages = []
    for (let i = 1; i <= 10; i++){
        pages.push(i)
    }

    return <div>
        <div className={s.counter}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.user}>
               <span>
                   <div>
                       <NavLink to={'/profile/' + u.id}>
                       <img src={u.photos.small != null ? u.photos.small : userPhoto}
                            className={s.img}/>
                      </NavLink>
                   </div>
                   <div>
                       {u.followed
                           ? <button onClick={() => {
                               props.unfollow(u.id)
                           }}>Unfollow</button>
                           : <button onClick={() => {
                              props.follow(u.id)
                           }}>Follow</button>
                       }
                   </div>
               </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>
            </div>
            )
        }
    </div>
}
export default Users