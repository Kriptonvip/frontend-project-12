import React from 'react'
import Logout from './Logout';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Hexlet Chat
            </Link>
            <Logout />
          </div>
        </nav>
  )
}

export default NavBar