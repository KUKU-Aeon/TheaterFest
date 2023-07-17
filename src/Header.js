import React from 'react';
import {Link} from "react-router-dom";
import Logo from './logo.svg'
import {useState} from "react";

let header = document.querySelector('header');
let prevScroll = window.pageYOffset;
let scroll = window.pageYOffset;
let hidden = false;

let scrolledDown = 0;

function onScroll()
{
        if (!header) {
            return;
        }

        scroll = window.pageYOffset;

        if ((header) && !hidden) {
            header.classList.remove('hidden');
        }
        if ((scroll - prevScroll > 0) && !hidden)
        {
            header.classList.add('hidden');
            hidden = true;
            prevScroll = scroll;
            scrolledDown = 0;
        } else {
            if (hidden && (scroll - prevScroll < 0))
                scrolledDown += scroll - prevScroll;
            else
                scrolledDown = 0;
            console.log((scrolledDown < -50) && hidden)
            if ((scrolledDown < -50) && hidden) {
                console.log('remove-2')
                header.classList.remove('hidden');
                hidden = false;
                prevScroll = scroll
            }
        }

        if (hidden && window.pageYOffset === 0) {
            header.classList.remove('hidden');
            hidden = false;
            prevScroll = scroll
        }

        prevScroll = scroll
}

const overflowHTML = (rule) => {
  if (rule)
      document.getElementsByTagName('html')[0].style.overflow ="hidden";
  else
      document.getElementsByTagName('html')[0].style.overflow ="";
}


function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    window.addEventListener('scroll', onScroll);
    return (
        <header>
            <div> <img src={Logo} alt=""/> <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                overflowHTML(!isNavExpanded)
            }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="black"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button></div>
            <nav className={isNavExpanded ? "active" : ""} onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                overflowHTML(!isNavExpanded)
            }}>
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