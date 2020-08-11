import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';
import {connect} from 'react-redux';

// const DialogsContainer = () => {
//     //let state = props.store.getState().dialogsPage;


//     return (
//         <StoreContext.Consumer>
//         { store => {
//                 let onMessageSendClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 }
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 }

//                 return(
//                     <Dialogs updateNewMessageBody={onNewMessageChange} 
//                             sendMessage={onMessageSendClick} 
//                             dialogsPage={store.getState().dialogsPage} />
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage // state = store.getState()
    }
}

let mapDispatchToProps = (dispatch) => {  // сюда коннект засунет store.dispatch.bind(store)
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;