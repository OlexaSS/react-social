import React from 'react';
import s from './MyPosts.module.css';
import Post from './posts/Post';

const MyPosts = () => {
    return (
        <div>
          my post
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          <Post message='Hello, how are you?' counter='20' />
          <Post message='My first post' counter='30' />
          
        </div>
      </div>
    );
}


export default MyPosts;