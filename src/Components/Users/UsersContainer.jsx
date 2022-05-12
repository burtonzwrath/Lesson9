import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  deleteUserThunk,
  fetchUsersThunk,
} from "../../store/actions/actions";
import UsersList from "./UsersList";
import { setUser } from "../../store/actions/actions";
import { Box, Button, Table } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function UsersContainer() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onCreateButton() {
    navigate("create");
  }
  const onItemClick = (user) => {
    dispatch(setUser(user));
  };

  function removeUser(user) {
    dispatch(deleteUserThunk(user));
  }

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, []);

  return (
    <Box>
      <UsersList
        removeUser={removeUser}
        users={users}
        onItemClick={onItemClick}
      />
      <Button
        onClick={onCreateButton}
        sx={{ marginLeft: "300px", marginTop: "50px" ,  fontSize:"30px"}}
      >
        Create new user
      </Button>
    </Box>
  );
}
