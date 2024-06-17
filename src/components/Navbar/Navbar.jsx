import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="nav-wrapper">
            <img src={logo} alt="" />

            <ul className="nav-list">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Our Team">Our Team</NavLink></li>
                <NavLink to='/Insurance'><li>Insurance</li></NavLink>
                
                <li><NavLink to="/about">About</NavLink></li>
                <li>Blog</li>
                <li><NavLink to="/privacypolicy">Privacy policy</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>

            <div className="contact">
                <button>Book Now</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
