import TodoItem from "./TodoItem";
import { List } from "@mui/material";

export default function TodoList({ todos, onItemClick, onDelete }) {
  return (
    <List>
      {todos.map((item) => (
        <TodoItem todo={item} onItemClick={onItemClick} onDelete={onDelete} />
      ))}
    </List>
  );
}
