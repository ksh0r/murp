import axios from 'axios';
import { useEffect, useState } from 'react';


function Logs() {
    const [logs, setLogs] = useState([]);
    const [newMessage, setNewMessage] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/logs")
        .then((res) => setLogs(res.data))
        .catch((err) => console.error("Error fetching logs"))
    }, []);

    const handleAddLog = async () => {
        if (newMessage.trim() === "") return;
        try {
            const res = await axios.post("http://localhost:5000/api/logs", {
                message: newMessage
            });
            setLogs([res.data, ...logs]);
            setNewMessage("");
        } catch (err) {
            console.error("Error adding Log:", err);
        }
    };

    const handleDeletion = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/logs${id}`);
            setLogs(logs.filter(log => log._id != id));
        } catch (err) {
            console.error("Error deleting task:", err);
        }
    }

    return (
        <div className="log-header">
            <h2>Logs</h2>
            <div className="log-entry">
                <input type="text" className="log-input" placeholder="Enter your log" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
                <button className="log-button" onClick={handleAddLog}>Log</button>
            </div>

            <div className="log-list">
                {logs.map((log) => (
                    <p>{log.message}</p>
                ))}
            </div>
        </div>
    );
}

export default Logs;
