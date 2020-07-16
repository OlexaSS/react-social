import React from 'react';
import s from './MyPosts.module.css';
import Post from './posts/Post';

const MyPosts = () => {
  return (
    <div className={s.postBlock}>
      <h3>my post</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          <Post message='Hello, how are you?' counter='20' />
          <Post message='My first post' counter='30' />
        </div>
    </div>
  );
}


export default MyPosts;