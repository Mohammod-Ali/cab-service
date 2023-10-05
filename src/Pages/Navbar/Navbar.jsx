import React from 'react';
import './Navbar.css'
import navLogo from '../../assets/RIDE EVEE Logo 1.png'
import navPic from '../../assets/nav pic.png'
import navBtn from '../../assets/nav btn.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <img src={navLogo} alt="Logo" />
            </div>
            <div>
                <img src={navPic} alt="navPic" />
            </div>
            <div className='navBtn'>
                <button>Customer Sign In</button>
                <button style={{backgroundColor: '#38B000', color: 'white'}}>Vendor Sign In</button>
                <img style={{cursor: 'pointer'}} src={navBtn} alt="navBtn" />
            </div>
        </div>
    );
};

export default Navbar;