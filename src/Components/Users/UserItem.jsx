import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AvatarIcon from "../Icons/AvatarIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editNewUser } from "../../store/actions/actions";

export default function UserItem({ user, onItemClick, removeUser }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function navi() {
    dispatch(editNewUser(user));
    navigate("edit/" + user.id);
  }
  const style = (user) => {
    return user.status === true ? "green" : "orange";
  };
  const style2 = (user) => {
    return user.status === true ? "orange" : "green";
  };

  return (
    <TableRow sx={{ backgroundColor: "linen" }}>
      <TableCell>
        <AvatarIcon user={user} />
      </TableCell>

      <TableCell
        onClick={navi}
        sx={{
          color: "brown",
          backgroundColor: "lightblue",
          marginLeft: "5px",
          fontSize: "20px",
        }}
        key={user.id}
      >
        {user.name}
      </TableCell>

      <TableCell
        onClick={navi}
        sx={{
          color: "brown",
          backgroundColor: "lightgrey",
          marginLeft: "5px",
          fontSize: "20px",
        }}
      >
        {user.surname}
      </TableCell>
      <TableCell
        onClick={navi}
        sx={{
          color: "brown",
          backgroundColor: "lightslategrey",
          marginLeft: "5px",
          fontSize: "20px",
        }}
      >
        {user.phone}
      </TableCell>

      <TableCell sx={{ display: "flex", gap: "10px" }}>
        <Button
          style={{
            backgroundColor: style(user),
            color: style2(user),
            fontSize: "16px",
          }}
          id="statusButton"
          onClick={(e) => onItemClick(user)}
        >
          {user.status === true ? "Done" : "unDone"}{" "}
        </Button>

        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ fontSize: "16px", backgroundColor: "lightcoral" }}
          onClick={() => removeUser(user)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
