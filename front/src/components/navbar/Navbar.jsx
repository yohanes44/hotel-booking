import React from 'react'


import "./navbar.scss";

export default function () {
  return (
    <div className='navbar'>
        
        <div className="navbarContainer">
            
            <span className="logo">joBooking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}
