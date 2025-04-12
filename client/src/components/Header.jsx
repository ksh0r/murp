import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
        <h1>.,.MurP.,.</h1>
        <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/tasks">Tasks</Link>
        </nav>
        </header>
    );
}

export default Header;
