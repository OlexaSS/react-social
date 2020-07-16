import React from 'react';
import s from'./Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <a href='#' className={s.header_link}>My Cocial</a>
        </header>
    );
}


export default Header;