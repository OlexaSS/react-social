import React from 'react';
import image from '../../../images/image.jpg';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';

const ProfileInfo = (props) => { //получаем из профайла данные
  if(!props.profile){ //если нет профайла и он андефайнед
    return <Preloader />
  }

  return (
    <div className={s.profile}>
      <div className={s.img}>
        <img src={image} />
      </div>
      <div className={s.descriptionBlock}>
        <img src={ props.profile.photos.large } alt=""/>  {/* получаем картинку из сервера */}
        <div className={s.about}>
          {props.profile.aboutMe}
        </div>
        ava + descr
      </div>
    </div>
  );
}


export default ProfileInfo;