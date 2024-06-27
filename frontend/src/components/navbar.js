import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="/exercise-tracker" className='navbar-brand'>Exercise Tracker</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className='collapse navbar-collapse' id="navbarSupportedContent">
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <Link to="/exercise-tracker" className='nav-link'>Exercises</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/exercise-tracker/create" className='nav-link'>create Exercises</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/exercise-tracker/user" className='nav-link'>Create user</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;