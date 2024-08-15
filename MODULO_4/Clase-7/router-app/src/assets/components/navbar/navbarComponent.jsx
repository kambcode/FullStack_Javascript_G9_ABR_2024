import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbarComponent.css'
const NavbarComponent = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink className={({isActive}) => (isActive ? 'active' : '')} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => (isActive ? 'active' : '')} to="/about">About</NavLink>
            </li>
            <li>
                <a href="/user">Users</a>
            </li>
        </ul>
    </div>
  )
}

export default NavbarComponent