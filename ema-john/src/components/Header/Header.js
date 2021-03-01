import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div class="header">
            <img src={logo} alt="" srcset=""/>
            <nav>
            <a href="/shop">shop</a>
            <a href="/review">Review</a>
            <a href="/manage">Manage</a>
            </nav>
        </div>
    );
};

export default Header;