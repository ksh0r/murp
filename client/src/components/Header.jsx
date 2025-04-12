import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
        <h1>.,.MurP.,.</h1>
        <nav>
            <Link to="/"><button className="head-but">Dashboard</button></Link>
            <Link to="/tasks"><button className="head-but">Tasks</button></Link>
        </nav>
        </header>
    );
}

export default Header;
