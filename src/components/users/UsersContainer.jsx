import React from 'react';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reduser';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,  //прокидываем в юзерс из юзеер редусер
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
} 

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId)); //диспатчим РЕЗУЛЬТАТ креатора!!
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (setNumber) => {
            dispatch(setCurrentPageAC(setNumber));
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        } 
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;