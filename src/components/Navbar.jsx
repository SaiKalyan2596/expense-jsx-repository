import React from 'react'
//import "./Navbar.css"
import { NavLink,replace } from 'react-router'

const Navbar = () => {
  return (
    <div className="navbar"><img src="" alt="" />
        <ul>
            <NavLink to="/">
                <li>Home</li>
            </NavLink>
            <NavLink to="/Dashboard">
                <li>Dashboard</li>
            </NavLink>
            <NavLink to="/Trips">
                <li>Trips</li>
            </NavLink>
            <NavLink to="/Statistics">
                <li>Statistics</li>
            </NavLink>
            <NavLink to="/AboutUs">
                <li>AboutUs</li>
            </NavLink>
        </ul>
        <div className='Gap'></div>
    </div>
  )
}

export default Navbar
