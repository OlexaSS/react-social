import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.messageItem}>{props.message}</div>
    );
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id='1' name='Kolya'/>
                <DialogItem id='2' name='Andrey'/>
                <DialogItem id='3' name='Petya'/>
                <DialogItem id='4' name='Vasya'/>
                <DialogItem id='5' name='Sasha'/>
                <DialogItem id='6' name='Olexa'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi there!'/>
                <Message message='Good day!'/>
                <Message message='Good bue!'/>
                <Message message='Good bue!'/>
                <Message message='Hi there!'/>
            </div>
        </div>
    );
}

export default Dialogs;