import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="home">Home</Link>
    <Link className="navbar-brand" to="Student">Student</Link>
    <Link className="navbar-brand" to="Contact">Contact Us</Link>
   
  </div>
</nav>
        </div>
    )
}

export default Nav

