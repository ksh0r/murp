import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="sidebar">
            <ul>
                <li><Link to="/tasks"><button className="nav-but">Task Management</button></Link></li>
                <li><Link to="/users"><button className="nav-but">Users</button></Link></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
