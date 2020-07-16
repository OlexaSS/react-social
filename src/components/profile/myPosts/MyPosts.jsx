import React from 'react';
import s from './MyPosts.module.css';
import Post from './posts/Post';

const MyPosts = () => {

  let postsData = [
    {id: 1, post: 'Hello, how are you?', counter: 12},
    {id: 2, post: 'My first post', counter: 30}
  ];
  return (
    <div className={s.postBlock}>
      <form action="">
        <h3 className={s.postTitle}>my post</h3>
        <div>
          <div className={s.text}>
            <textarea rows='10' cols='50'></textarea>
          </div>
          <div className={s.btn}>
            <button className={s.postBtn}>Add post</button>
          </div>
        </div>
      </form>
      <div className={s.posts}>
        <Post message={postsData[0].post} counter={postsData[0].counter} />
        <Post message={postsData[1].post} counter={postsData[1].counter} />
      </div>
    </div>
  );
}


export default MyPosts;