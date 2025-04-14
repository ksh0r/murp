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

    const handleToggleComplete = async (id, currentState) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, {
                isCompleted: !currentState
            });

            setTasks(tasks.map(task => task._id === id ? { ...task, isCompleted: res.data.isCompleted } : task));
        } catch (err) {
            console.error("Error updating task:", err.response?.data || err.message);
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
        <ul className="task-list">
        {tasks.map((task) => (
            <li key={task._id} className={`task-item ${task.isCompleted ? "completed" : ""}`}>
            <label className="checkbox-wrapper">
            <input
            type="checkbox"
            className="checkbox"
            checked={task.isCompleted}
            onChange={() => handleToggleComplete(task._id, task.isCompleted)}
            />
            <span className="custom-checkmark"></span>
            </label>
            <span className="task-text">{task.title}</span>
            </li>
        ))}
        </ul>
        </div>
    );
}

export default Tasks;
