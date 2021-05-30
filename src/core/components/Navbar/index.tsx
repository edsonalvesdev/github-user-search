import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="main-nav">
        <Link to="/" className="nav-logo-text">
            Bootcamp DevSuperior
        </Link>
    </nav>
)

export default Navbar;