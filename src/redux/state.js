const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('state is changed');
    },
    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        // if(action.type === 'ADD-POST'){
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                counter: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        // }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
        }else if (action.type === UPDATE_NEW_POST_TEXT ){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

// export const addPostActionCreator = () => {
//     // return {type: 'ADD-POST'};
//     return {type: ADD_POST};
//   }
export const addPostActionCreator = () =>({type: ADD_POST});

  
// export const updateNewPostTextActionCreator = (text) => {
//     // return {type: 'UPDATE-NEW-POST-TEXT', newText: text} ;
//     return {type: UPDATE_NEW_POST_TEXT, newText: text} ;
//   }
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});





  export default store;