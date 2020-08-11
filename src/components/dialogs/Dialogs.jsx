import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => {
        return (<DialogItem key={d.id} id={d.id} name={d.name}/>);
    });
    let messageElements = state.messages.map( m => <Message key={m.id} message={m.message}/> );

    let onMessageSendClick = () => {
        props.sendMessage();

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);

    }
    let newMessageBody = state.newMessageBody;

    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div className={s.text}>
                       <textarea cols="30" rows="10" 
                       value={newMessageBody} 
                       onChange={onNewMessageChange}
                       placeholder='enter your message'></textarea> 
                    </div>
                    <div className={s.btn}>
                        <button className={s.postBtn} onClick={onMessageSendClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;