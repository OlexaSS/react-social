const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ],
    newMessageBody: ''
};

const dialogsReduser = (state = initialState, action) => {

                            // if(action.type === UPDATE_NEW_MESSAGE_BODY){
                            //     state.newMessageBody = action.body;
                                
                            // }else if(action.type === SEND_MESSAGE){
                            //     let body =  state.newMessageBody; //получаем текс
                            //     state.newMessageBody = ''; //обнуляем поле ввода
                            //     state.messages.push({id: 6, message: body}); //пушим в стейт
                                
                            // }

                            // return state;

    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY: 
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE: 
            let body =  state.newMessageBody; //получаем текс
            state.newMessageBody = ''; //обнуляем поле ввода
            state.messages.push({id: 6, message: body}); //пушим в стейт
            return state;
        default: return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReduser;