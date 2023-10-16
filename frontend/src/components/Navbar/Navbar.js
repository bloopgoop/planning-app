import React, { useState } from 'react';
import './Navbar.css';
import './AccountMenu.css';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <nav className='navbar-container'>
                <div className='nav-item'><a href='#' data-item='Home'>Home</a></div>
                <div className='nav-item'><a href='#'>Logo</a></div>
                <div className='nav-item'>
                    <button onClick={handleShow}>
                        Account
                    </button>
                </div>
            </nav>
            <AccountMenu handleClose={handleClose} show={show}/>
        </>
    )
}

// Bootstrap Offcanvas component, pass in show and handleClose as props
function AccountMenu({ show, handleClose }) {
    return (
      <>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Account</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <a href='#' className='account-item'>Set status</a>
              <div className='menu-linebreak'></div>
              <a href='#' className='account-item'>Profile</a>
              <div className='menu-linebreak'></div>
              <a href='#' className='account-item'>Your plans</a>
              <a href='#' className='account-item'>Your templates</a>
              <a href='#' className='account-item'>Log out</a>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
