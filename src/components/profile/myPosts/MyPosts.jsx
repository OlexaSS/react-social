import React from 'react';
import s from './MyPosts.module.css';
import Post from './posts/Post';



const MyPosts = (props) => {
  let postElement = props.posts.map( (p) => <Post key={p.id} message={p.post} counter={p.counter} /> );
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;// берем текстэрию
    props.updateNewPostText(text); //передаем текст наверх
  }

  
  return (
    <div className={s.postBlock}>
      <form action="">
        <h3 className={s.postTitle}>my post</h3>
        <div>
          <div className={s.text}>
            <textarea onChange={onPostChange} ref={newPostElement} rows='10' cols='50' value={props.newPostText} />
          </div>
          <div className={s.btn}>
            <button className={s.postBtn} type='button' onClick={ onAddPost } >Add post</button>
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