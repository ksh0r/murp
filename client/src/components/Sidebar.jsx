import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="sidebar">
            <ul>
                <li><Link to="/tasks">Task Management</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
