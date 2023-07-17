import React from 'react';
import {Link} from "react-router-dom";
import Logo from './logo.svg'

function Header() {
    return (
        <header>
            <img src={Logo} alt=""/>
            b
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/billboard">Афиша</Link>
                <Link to="/about">О театре</Link>
                <Link to="/contact">Контакты</Link>
                <Link to="/admin">Админ</Link>
            </nav>
        </header>
    );
}

export default Header;