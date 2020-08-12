const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, post: 'Hello, how are you?', counter: 12},
        {id: 2, post: 'My first post', counter: 30},
        {id: 3, post: 'My second post', counter: 22}
    ],
    newPostText: 'write here'
};

const profileReduser = (state = initialState, action) => {  //в стейте приходит profilePage
    
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
        case ADD_POST:{
            let newPost = {
                id: 5,
                post: state.newPostText,
                counter: 0
            };
            let stateCopy = {...state};// копируем объект
                stateCopy.posts = [...state.posts];/// копи массив постов
                stateCopy.posts.push(newPost);//пушим в копию новый пост
                stateCopy.newPostText = '';//очищаем поле ввода
                return stateCopy;
        }

            // state.posts.push(newPost);
            // state.newPostText = '';
            // return state;

        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;



            // state.newPostText = action.newText;
            // return state;
        }
        default: return state;

    } 
}

export const addPostActionCreator = () =>({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReduser;
