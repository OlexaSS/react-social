import React from 'react';
import s from './MyPosts.module.css';
import Post from './posts/Post';

const MyPosts = (props) => {
  let postElement = props.posts.map( (p) => <Post key={p.id} message={p.post} counter={p.counter} /> );
  let newPostElement = React.createRef();

  let addPost = () => {
    // debugger;
      let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';   //очищаем поле ввода эриа
  }

  return (
    <div className={s.postBlock}>
      <form action="">
        <h3 className={s.postTitle}>my post</h3>
        <div>
          <div className={s.text}>
            <textarea ref={newPostElement} rows='10' cols='50'></textarea>
          </div>
          <div className={s.btn}>
            <button className={s.postBtn} type='button' onClick={ addPost } >Add post</button>
          </div>
        </div>
      </form>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>
  );
}
export default MyPosts;