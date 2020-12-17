import React from 'react'
import Users from './UsersC'
import {connect} from 'react-redux'
import {followAC, setUserAС, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUserAС(users))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)