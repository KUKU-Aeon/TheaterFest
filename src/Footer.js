import React from 'react';
import {Link} from "react-router-dom";
import VK from './content/vk.png'
import TG from './content/telegram.png'

function Footer()
{
    return(
        <footer>
            <nav>
                <Link to="https://vk.com/teatrfestru"><img src={VK} alt="Ссылка на страничку В Контакте"/></Link>
                <Link to="/"><img src={TG} alt="Ссылка на страничку в Телеграмм"/></Link>
            </nav>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/billboard">Афиша</Link>
                <Link to="/about">О театре</Link>
                <Link to="/contact">Контакты</Link>
            </nav>
        </footer>
    );
}

export default Footer;