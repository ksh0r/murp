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
            setLogs([...logs, res.data]);
            setNewTitle("");
        } catch (err) {
            console.error("Error adding Log:", err);
        }
    };

    return (
        <div className="log-header">
            <h2>Logs</h2>
        </div>
    );
}

export default Logs;
