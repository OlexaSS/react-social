import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog +' '+ s.active}>
                    <NavLink to='/dialogs/1'>Kolya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Petya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Vasya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Olexa</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messageItem}>Hi there!</div>
                <div className={s.messageItem}>Good day!</div>
                <div className={s.messageItem}>Good bue!</div>
                <div className={s.messageItem}>Good bue!</div>
            </div>
        </div>
    );
}

export default Dialogs;