const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';//СОЗДАЕМ НОВЫЙ ЭКШНКРЕАТОР ТАЙП

let initialState = {
    posts: [
        { id: 1, post: 'Hello, how are you?', counter: 12 },
        { id: 2, post: 'My first post', counter: 30 },
        { id: 3, post: 'My second post', counter: 22 }
    ],
    newPostText: 'write here',
    profile: null
};

const profileReduser = (state = initialState, action) => {  //в стейте приходит profilePage


    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                counter: 0
            };
            return {
                ...state, // копируем объект
                posts: [...state.posts, newPost],/// копи массив постов//пушим в копию новый пост
                newPostText: ''//очищаем поле ввода
            };

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        default: return state;

    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });//создаем новый экшнкреатор, из контейнера приходит профайл
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReduser;
