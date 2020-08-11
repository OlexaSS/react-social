import React from 'react';
import MyPostsContainer from './myPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './profileinfo/ProfileInfo';

const Profile = () => {
  return (
    <div>
    
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}
export default Profile;