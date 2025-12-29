import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import NavbarTop from './components/NavbarTop';
import NavbarMain from './components/NavbarMain';
import vector from '../../components/icons/src/Navbar/Vector.svg';

import {
    HeartIcon,
    NetworkIcon,
    CartIcon,
    SearchIcon
} from '../../components';

import { NavbarWrapper } from './Navbar.styled';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <NavbarWrapper>
            <div className="container desktop-content">
                <NavbarTop />
                <NavbarMain />
            </div>

            <div className="container mobile-content">
                <div className="mobile-top">
                    <button className="burger" onClick={() => setOpen(true)}> <img src={vector} alt="menu" /> </button>
                    <img src="/logo.svg" alt="Logo" />
                    <div className="mobile-icons">
                        <HeartIcon />
                        <NetworkIcon className="hide-mobile" />
                        <CartIcon />
                    </div>
                </div>

                <div className="mobile-search">
                    <input placeholder="Поиск по товарам" />
                    <SearchIcon />
                </div>

                <div className={`mobile-menu ${open ? 'open' : ''}`}>
                    <button className="close" onClick={() => setOpen(false)}>✕</button>


                    <button className="catalog-btn">Каталог</button>

                    <div className="mobile-phone">
                        <a href="tel:88008904656">8 (800) 890-46-56</a>
                        <button>Заказать звонок</button>
                    </div>
                </div>

                {open && <div className="overlay" onClick={() => setOpen(false)} />}
            </div>
        </NavbarWrapper>
    );
}

export default Navbar;
