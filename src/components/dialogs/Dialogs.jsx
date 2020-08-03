import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';


const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Kolya'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Vasya'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Olexa'}
    ];
    let messages = [
        {id: 1, message: 'Hi there!'},
        {id: 2, message: 'Good day!'},
        {id: 3, message: 'Good bue!'},
        {id: 4, message: 'Hi there!'},
        {id: 5, message: 'Good day!'},
        {id: 6, message: 'Good bue!'}    
    ];

    let dialogsElements = dialogs.map((d) => {
        return (<DialogItem key={d.id} id={d.id} name={d.name}/>);
    });

    let messageElements = messages.map( m => <Message key={m.id} message={m.message}/> );

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