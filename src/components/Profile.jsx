import React from 'react';
import image from '../images/image.jpg';
import s from './Profile.module.css';
import ava from '../images/ava.jpg';

const Profile = () => {
    return (
      <div className={s.content}>
      <div>
        <img src={image} />
      </div>
      <div>
        ava + descr
      </div>
        <div>
          my post
        <div>
          new post
        </div>
        <div className={s.posts}>
          <div className={s.item}>
            Post 1
          </div>
          <div className={s.item}>
            Post 2
          </div>
        </div>
      </div>
    </div>
    );
}


export default Profile;