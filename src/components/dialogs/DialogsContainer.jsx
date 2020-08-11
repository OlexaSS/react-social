import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onMessageSendClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    

    
    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onMessageSendClick} dialogsPage={state} />
    );
}
export default DialogsContainer;