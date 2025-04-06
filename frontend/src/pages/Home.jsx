import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { fetchTasks, addTask, deleteTask } from "../api/tasks";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const data = await fetchTasks();
      setTasks(data);
    }
    loadTasks();
  }, []);

  const handleAddTask = async (title) => {
    const newTask = await addTask(title);
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>To-Do List</Typography>
      <AddTask onAdd={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </Container>
  );
}
