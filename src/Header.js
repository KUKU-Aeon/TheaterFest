import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from './logo.svg'
import {useState} from "react";

let header
let prevScroll = window.pageYOffset;
let scroll = window.pageYOffset;
let hidden = false;

let scrolledDown = 0;

async function onScroll()
{

    header = await document.querySelector('header');

    if (!header) {
        return;
    }

    scroll = window.pageYOffset;

    if ((header) && !hidden) {
        header.classList.remove('hidden');
    }

    if ((scroll - prevScroll > 0) && !hidden) {
        header.classList.add('hidden');
        hidden = true;
        prevScroll = scroll;
        scrolledDown = 0;
    } else {
        if (hidden && (scroll - prevScroll < 0))
            scrolledDown += scroll - prevScroll;
        else
            scrolledDown = 0;

        if ((scrolledDown < -50) && hidden) {
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
  rule ? document.getElementsByTagName('html')[0].style.overflow ="hidden" : document.getElementsByTagName('html')[0].style.overflow ="";
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
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "active" : ""
                }>Главная</NavLink>
                <NavLink to="/billboard" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>Афиша</NavLink>
                <NavLink to="/about" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>О театре</NavLink>
                <NavLink to="/contact" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>Контакты</NavLink>
                <NavLink to="/admin" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>Админ</NavLink>
            </nav>
        </header>
    );
}

export default Header;