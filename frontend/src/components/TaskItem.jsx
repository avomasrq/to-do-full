import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskItem({ task, onDelete }) {
  return (
    <ListItem>
      <ListItemText primary={task.title} />
      <IconButton edge="end" onClick={() => onDelete(task._id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
