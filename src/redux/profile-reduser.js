const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReduser = (state, action) => {  //в стейте приходит profilePage
    
    // if(action.type === ADD_POST){
    //     let newPost = {
    //         id: 5,
    //         post: state.newPostText,
    //         counter: 0
    //     };
    //     state.posts.push(newPost);
    //     state.newPostText = '';
    //    // это здесь не надо, ф-ция только вазвращает state
    //    // this._callSubscriber(this._state);


    // }else if (action.type === UPDATE_NEW_POST_TEXT ){
    //     state.newPostText = action.newText;
    // }
    

    // return state;
////////////////////////////////////////////////////////////////////////////

    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                counter: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;

    } 
}

export const addPostActionCreator = () =>({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReduser;
