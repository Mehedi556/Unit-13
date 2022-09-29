import React from 'react';
import logo from '../../images/loogo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h1 className='text-5xl font-bold pl-6 text-black'>UNIT-13</h1>

        </div>
    );
};

export default Header;