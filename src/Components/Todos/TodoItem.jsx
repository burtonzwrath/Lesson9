import { Box, ListItem, ListItemText } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AvatarIcon from "../Icons/AvatarIcon";

export default function TodoItem({ todo, onItemClick, onDelete }) {
  const style = (todo) => {
    return todo.status === true ? "green" : "orange";
  };
  const style2 = (todo) => {
    return todo.status === true ? "orange" : "green";
  };

  return (
    <Box
      sx={{
        backgroundColor: "lightgrey",
        display: "flex",
        justifyContent: "space-between",
        width: "500px",
        marginBottom: "10px",
        border: "1px solid lightBlue",
        marginLeft: "170px",
        borderRadius: "5px",
        marginTop: "20px",
      }}
    >
      <AvatarIcon todo={todo} />
      <ListItem sx={{ display: "flex", fontSize: "40px" }}>
        <ListItemText
          sx={{
            color: "brown",
            backgroundColor: "lightgrey",
            marginLeft: "5px",
          }}
          key={todo.id}
        >
          {todo.name}
        </ListItemText>
      </ListItem>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Button
          style={{
            backgroundColor: style(todo),
            color: style2(todo),
            fontSize: "13px",
          }}
          id="statusButton"
          onClick={(e) => onItemClick(todo)}
        >
          {" "}
          {todo.status === true ? "Done" : "unDone"}{" "}
        </Button>

        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ fontSize: "13px", backgroundColor: "lightcoral" }}
          onClick={() => onDelete(todo)}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
