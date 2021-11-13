import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link to="/" className="d-flex align-items-center mb-1 text-white text-decoration-none">
                    <i className="bi bi-book-half"></i>
                    <span className="fs-4 ms-3">Books</span>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;