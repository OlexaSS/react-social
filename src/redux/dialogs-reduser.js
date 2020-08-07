const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReduser = (state, action) => {

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