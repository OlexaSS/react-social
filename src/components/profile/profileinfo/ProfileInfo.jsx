import React from 'react';
import image from '../../../images/image.jpg';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.profile}>
      <div className={s.img}>
        <img src={image} />
      </div>
      <div className={s.descriptionBlock}>
        ava + descr
      </div>
    </div>
  );
}


export default ProfileInfo;