import React from 'react';
import image from '../images/image.jpg';
import ava from '../images/ava.jpg';

const Profile = () => {
    return (
      <div className='content'>
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
        <div>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
        </div>
      </div>
    </div>
    );
}


export default Profile;