import React from 'react';
import s from './Post.module.css';
import ava from '../../../../images/ava.jpg';

const Post = () => {
    return (
          <div className={s.item}>
            <img src={ava} />
            Post 1
            <div>
              <span>Like</span>
            </div>
          </div>
    );
}


export default Post;