import React, { useState } from 'react';
import './Navbar.css';
import './AccountMenu.css';


export default function Navbar() {
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

    function openAccountMenu() {
        setIsAccountMenuOpen(true);
    }

    return (
        <>
            <nav className='navbar-container'>
                <div className='nav-item'><a href='#' data-item='Home'>Home</a></div>
                <div className='nav-item'><a href='#'>Logo</a></div>
                <div className='nav-item'>
                    <button onClick={() => setIsAccountMenuOpen(true)}>
                        Account
                    </button>
                </div>
            </nav>
            {/* if menu is opened, render menu with the function to close it as a prop */}
            {isAccountMenuOpen && <AccountMenu onClose={() => setIsAccountMenuOpen(false)}/>}
            <div className='linebreak'></div>
        </>

    )
}

function AccountMenu({ onClose }) {
    return (
        <div className='account-menu-container'>
            <div className='close-btn-container'>
                <div className='nav-item'>
                    <div>
                        Account
                    </div>
                </div>
                <button onClick={onClose} className='close-menu-button'>
                    X
                </button>
            </div>

            <a href='#' className='account-item'>Set status</a>
            <div className='menu-linebreak'></div>
            <a href='#' className='account-item'>Profile</a>
            <div className='menu-linebreak'></div>
            <a href='#' className='account-item'>Your plans</a>
            <a href='#' className='account-item'>Your templates</a>
            <a href='#' className='account-item'>Log out</a>
        </div>
    )
}