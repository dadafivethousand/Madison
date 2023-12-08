 
import React, { useState } from 'react'
import {  FaBars, FaTimes, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../Images/logwhite.jpg'
import { Link } from 'react-scroll'
import '../Stylesheets/Navbar.css'

export default function Navbar(){
//setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
// change nav color when scrolling
const [color, setColor] = useState(false)
const changeColor = () => {
    if (window.scrollY >= 90) {
        setColor(true)
    } else {
        setColor(false)
    }
}

window.addEventListener('scroll', changeColor)
//close menu on click
const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg':'header'}>
            <nav className='navbar'>
                <div>
                <Link to='/' syp={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                    <img className='logo' alt="Madison Avenue" src={logo}  />
                </Link>
          
              
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                    <Link to='/' syp={true} smooth={true}   duration={500} onClick={closeMenu}>Home  </Link>
                    </li>
            

                    <li className='nav-item'>
                    <Link to='services' syp={true} smooth={true}  offset={-80}  d  duration={500} onClick={closeMenu}>Services  </Link>
                    </li>
                
                    <li className='nav-item'>
                        <a href="https://getsquire.com/booking/book/madison-avenue-vaughan" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Booking</a>
                    </li>
                    <li className='nav-item'>
                    <Link to='contact' syp={true} smooth={true} offset={-50}  duration={500} onClick={closeMenu}>Contact  </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
 