import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle(""); // Clear input field after adding task
    }
  };

  return (
    <Box sx={{ mb: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="New Task"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Add Task
        </Button>
      </form>
    </Box>
  );
}
