import axios from 'axios';
import { useEffect, useState } from 'react';

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [newTitle, setNewTitle] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/tasks")
        .then((res) => setTasks(res.data))
        .catch((err) => console.error("Error fetching tasks"))
    }, []);

    const handleAddTask = async () => {
        if (newTitle.trim() === "") return;
        try {
            const res = await axios.post("http://localhost:5000/api/tasks", {
                title: newTitle
            });
            setTasks([res.data, ...tasks]);
            setNewTitle(""); // Clear the input box
        } catch (err) {
            console.error("Error adding Task:", err)
        }
    };

    return (
        <div className="task-header">
            <h2>Your Tasks</h2>
            <div className="task-items">
                <input 
                    type="text"
                    placeholder="Enter task title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="task-input" />
                <button onClick={handleAddTask} className="task-button">Add</button>
            </div>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.title} {task.isCompleted ? "✔️": ""}</li>
                    ))}
                </ul>
        </div>
    );
}

export default Tasks;
