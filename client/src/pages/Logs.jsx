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
            const res = await axios.delete(`http://localhost:5000/api/logs/${id}`);
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
                    <>
                    <p>{log.message}</p>
                    <button className="log-delete" onClick={() => handleDeletion(log._id)}>
            <svg className="trash" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </button>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Logs;
