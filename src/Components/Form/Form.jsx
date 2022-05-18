import { useState } from "react";
import { Box, Button, FormGroup, Input, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  editUser,
  createUserThunk,
  editUserThunk,
  editNewUser,
} from "../../store/actions/actions";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
  const stateUser = useSelector((state) => state.newUser);
  const { id } = useParams();
  const [newUser, setNewUser] = useState({ ...stateUser });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if (id === undefined) {
      dispatch(createUserThunk(newUser));
      dispatch(editNewUser({}));
      navigate("/");
    } else {
      dispatch(editUserThunk(newUser));
      dispatch(editNewUser({}));
      navigate("/");
    }
  };
  const buttonStyle = () => {
    return id === undefined ? "lightblue" : "orange";
  };

  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        width: "1000px",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        margin: "30px",
      }}
    >
      <FormGroup>
        <InputLabel htmlFor="nameInput" sx={{ fontSize: "20px" }}>
          {" "}
          Name
        </InputLabel>
        <Input
          id="nameInput"
          aria-describedby="my-helper-text"
          onChange={onChange}
          name="name"
          type="text"
          value={newUser.name}
        />
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="surnameInput" sx={{ fontSize: "20px" }}>
          Surname
        </InputLabel>
        <Input
          id="surnameInput"
          aria-describedby="my-helper-text"
          onChange={onChange}
          name="surname"
          type="text"
          value={newUser.surname}
        />
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="phone" sx={{ fontSize: "20px" }}>
          Phone
        </InputLabel>
        <Input
          id="phone"
          aria-describedby="my-helper-text"
          onChange={onChange}
          name="phone"
          type="text"
          value={newUser.phone}
        />
      </FormGroup>
      <Button sx={{ backgroundColor: buttonStyle }} onClick={onSubmit}>
        {id === undefined ? "Create" : "Edit"}
      </Button>
    </Box>
  );
}
