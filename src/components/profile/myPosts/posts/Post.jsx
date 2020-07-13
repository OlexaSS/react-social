import React from 'react';
import s from './Post.module.css';
import ava from '../../../../images/ava.jpg';

const Post = (props) => {
    return (
          <div className={s.item}>
            <img src={ava} />
            {props.message}
            <div>
              <span>Like</span>
            </div>
          </div>
    );
}


export default Post;