import axios from 'axios';
import { useEffect, useState } from 'react'

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/tasks")
        .then((res) => setTasks(res.data))
        .catch((err) => console.error("Error fetching tasks"))
    }, []);
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/logs")
        .then((res) => setLogs(res.data))
        .catch((err) => console.error("Error fetching logs"))
    }, []);

    return (
        <>
        <div className="dashboard-header">
            <h2>Welcome to the Dashboard</h2>
            <p>Overview of the project status, active tasks and previous logs</p>
        </div>
        <div className="dash-container">
            <div className="dash-tasks">
                <h3>Recent Tasks</h3>
            </div>
            <div className="dash-logs">
                <h3>Recent Logs</h3>
            </div>
        </div>
        </>
    );
}

export default Dashboard;
