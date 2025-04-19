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
            <p>Overview of the active tasks and previous logs</p>
        </div>
        <div className="dash-container">
            <div className="dash-tasks">
                <h4>Recent Tasks</h4>
                {tasks.length === 0 ?
                <p>No tasks for now - a moment of peace.</p> :
                <ul>
                {[...tasks].reverse().slice(0,7).map((task) => (
                    <li key="task._id" className={task.isCompleted ? "li-comp" : ""}>{task.title}</li>
                ))}
                </ul>}
            </div>
            <div className="dash-logs">
                <h4>Recent Logs</h4>
                {logs.length === 0 ?
                <p>No recent activity - logs will appear here.</p> :
                <ul>
                {[...logs].reverse().slice(0,7).map((log) => (
                    <li className="li-log">{log.message}</li>
                ))}
                </ul>}
            </div>
        </div>
        </>
    );
}

export default Dashboard;
