import React from 'react';
import image from '../../images/image.jpg';
import MyPosts from './myPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
      <div>
      <div>
        <img src={image} />
      </div>
      <div>
        ava + descr
      </div>
        <MyPosts />
    </div>
    );
}


export default Profile;