import React from 'react';
import MyPostsContainer from './myPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './profileinfo/ProfileInfo';

const Profile = (props) => { //сюда приходит профайл из контейнера
  return (
    <div>
    
      <ProfileInfo profile = {props.profile} /> {/*прокидываем пропсы дальше в профайлинфо */}
      <MyPostsContainer />
    </div>
  );
}
export default Profile;