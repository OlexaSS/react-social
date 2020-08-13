import React from 'react';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reduser';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
} 

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId)); //диспатчим результат креатора!!
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users)); //
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;