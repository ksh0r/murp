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
            console.error("Error updating task:", err);
        }
    };

    const handleDeletion = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
            setTasks(tasks.filter(task => task._id != id));
        } catch (err) {
            console.error("Error deleting task:", err);
        }
    }

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
            <button className="delete" onClick={() => handleDeletion(task._id)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="trash" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </button>
            </li>
        ))}
        </ul>
        </div>
    );
}

export default Tasks;
