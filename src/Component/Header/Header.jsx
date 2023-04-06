import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='nevber'>
        <Link to="/">Home</Link>
        <Link to="/review">Order review</Link>
        <Link to="/about">About</Link>
    </nav>
    );
};

export default Header;