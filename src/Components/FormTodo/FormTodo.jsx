import { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";

export default function FormTodo({ createTodo, onSave, newId }) {
  const [newTodo, setNewTodo] = useState({ ...createTodo });
  const [inputValue, setInputValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onSave(newTodo);
    setInputValue("");
  };

  const onChange = (e) => {
    const info = { ...newTodo, [e.target.name]: e.target.value, id: newId };
    setNewTodo(info);
    setInputValue(e.target.value);
  };

  return (
    <FormControl sx={{ width: "200px" }}>
      <InputLabel htmlFor="my-input">write new todo here</InputLabel>
      <Input
        id="my-input"
        aria-describedby="my-helper-text"
        onChange={onChange}
        name="name"
        type="text"
        value={inputValue}
      />
      <Button sx={{ backgroundColor: "lightsteelblue" }} onClick={onSubmit}>
        {" "}
        Create new{" "}
      </Button>
    </FormControl>
  );
}
