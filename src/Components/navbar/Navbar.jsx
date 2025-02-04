import React, { useState } from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT3</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
        
    </>
)


function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    
  return (
    // Gpt Navbar
    <div className='gpt3__navbar'>
        {/* GPT navbar links */}
        <div className='gpt3__navbar__links'>
            {/* GPT navbar links logo */}
            <div className='gpt3__navbar__links__logo'>
                <img src={logo} alt="logo" />
            </div>
            {/* Navbar items  */}
            <div className='gpt3__navbar__link__container'>
                    <Menu/>
            </div>
        </div>
        {/* Navbar signin and sign up buttons */}
        <div className='gpt3__navbar__sign'>
            <p>Sign in</p>
            <button type='button'>Sign up</button>
        </div>

        {/* For responsive mobile design */}
        <div className='gpt3__navbar__menu'>
            { toggleMenu
            ? <RiCloseLine color = "#fff" size = {27}  onClick = {()=>setToggleMenu(false)} />
            : <RiMenu3Line color = "#fff" size = {27}  onClick = {()=>setToggleMenu(true)} />
            }
            {toggleMenu && (
                <div className='gpt3__navbar__menu-container scale-up-center'>
                    <div className='gpt3__navbar__menu__container__links'>
                        <Menu/>
                        <div className='gpt3__navbar__menu__container__links__sign'>
                            <p>Sign in</p>
                            <button type='button'>Sign up</button>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    </div>
  )
}

export default Navbar