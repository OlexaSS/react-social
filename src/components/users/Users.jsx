import React from 'react';
import style from './User.module.css';
import userPhoto from '../../accets/images/user.jpg';
import {NavLink} from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize)/100);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

    return <div>
        <div className={style.pagination}>

            {pages.map((p) => {
                return <span className={props.currentPage === p ? style.selectedPage : style.uselectedPage} onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
            })}

        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    {/* оборачиваем картинку в навлинк, чтобы сделать картинку ссылкой */}
                    <NavLink to={'/profile'}> 
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.following
                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>
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
        </div>)
        }
    </div>
}

export default Users;