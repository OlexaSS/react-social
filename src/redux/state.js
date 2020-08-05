import {rerenderEntireTree} from './../render';



let state = {
    profilePage:{
        posts: [
            {id: 1, post: 'Hello, how are you?', counter: 12},
            {id: 2, post: 'My first post', counter: 30},
            {id: 3, post: 'My second post', counter: 22}
        ],
        newPostText: 'write here'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi there!'},
            {id: 2, message: 'Good day!'},
            {id: 3, message: 'Good bue!'},
            {id: 4, message: 'Hi there!'},
            {id: 5, message: 'Good day!'},
            {id: 6, message: 'Good bue!'}    
        ],
        dialogs: [
            {id: 1, name: 'Kolya'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Petya'},
            {id: 4, name: 'Vasya'},
            {id: 5, name: 'Sasha'},
            {id: 6, name: 'Olexa'}
        ]
    }
  }


  export let addPost = () => {
      
      let newPost = {
          id: 5,
          post: state.profilePage.newPostText,
          counter: 0
      };
      state.profilePage.posts.push(newPost);
      state.profilePage.newPostText = '';
      rerenderEntireTree(state);
  }

  export let updateNewPostText = (newText) => {
     
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

  export default state;