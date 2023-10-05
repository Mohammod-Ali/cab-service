import React from 'react';
import './Footer.css'
import logo from '../../assets/RIDE EVEE Logo 1.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logo} alt="logo" />

            <div className='footer-name'>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>News</p>
                <p>Contact</p>
            </div>

           <div className='newsFrom'>
           <h3>Newsletter</h3>
            <form action="">
                <input type="email" placeholder='Email' />
                <button><span>&#8594;</span></button>
            </form>
           </div>

            <p>All Copyrights are reserved by RIDE EVEE</p>
        </div>
    );
};

export default Footer;