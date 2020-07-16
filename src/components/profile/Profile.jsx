import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './profileinfo/ProfileInfo';

const Profile = () => {
  return (
    <div>

      <ProfileInfo />
      
      
      <MyPosts />
    </div>
  );
}


export default Profile;