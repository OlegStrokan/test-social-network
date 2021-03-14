import React from 'react'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    totalUsersCount: number,
    pageSize: number,
    users: Array<UserType>,
    followingInProgress: Array<number>
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}

let Users: React.FC<PropsType> = ({currentPage,onPageChanged,totalUsersCount,pageSize, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}/>
        <div>{props.users.map(u =><User key={u.id}
                                      user={u}
                                      followingInProgress={props.followingInProgress}
                                      unfollow={props.unfollow}
                                      follow={props.follow}/>)}
    </div></div>
}
export default Users