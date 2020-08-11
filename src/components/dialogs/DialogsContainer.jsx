import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    //let state = props.store.getState().dialogsPage;


    return (
        <StoreContext.Consumer>
        { store => {
                let onMessageSendClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }

                return(
                    <Dialogs updateNewMessageBody={onNewMessageChange} 
                            sendMessage={onMessageSendClick} 
                            dialogsPage={store.getState().dialogsPage} />
                )
            }
        }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;