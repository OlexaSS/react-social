import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.messageItem}>{props.message}</div>
    );
}


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
        return (<DialogItem id={d.id} name={d.name}/>);
    });

    let messageElements = messages.map( m => <Message message={m.message}/> );
    
    
    // [
    //     <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>,
    //     <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>,
    //     <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
    // ];

    
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}

                {/* <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/> */}
                {/* <DialogItem id='3' name='Petya'/>
                <DialogItem id='4' name='Vasya'/>
                <DialogItem id='5' name='Sasha'/>
                <DialogItem id='6' name='Olexa'/> */}
            </div>
            <div className={s.messages}>
                {messageElements}

                {/* <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/> */}

                {/* <Message message='Good bue!'/>
                <Message message='Good bue!'/>
                <Message message='Hi there!'/> */}
            </div>
        </div>
    );
}

export default Dialogs;