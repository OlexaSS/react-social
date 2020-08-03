import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';


const Dialogs = (props) => {
    
    

    let dialogsElements = props.state.dialogs.map((d) => {
        return (<DialogItem key={d.id} id={d.id} name={d.name}/>);
    });

    let messageElements = props.state.messages.map( m => <Message key={m.id} message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;