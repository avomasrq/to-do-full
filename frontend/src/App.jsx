import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from back-end
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5002/api/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Delete task locally and from the back-end
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task._id !== taskId)); // Remove the task from local state
  };

  return (
    <div>
      <Home tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}
