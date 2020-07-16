import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>Kolya</div>
                <div className={s.dialog}>Andrey</div>
                <div className={s.dialog}>Petya</div>
                <div className={s.dialog}>Vasya</div>
                <div className={s.dialog}>Sasha</div>
                <div className={s.dialog}>Olexa</div>
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