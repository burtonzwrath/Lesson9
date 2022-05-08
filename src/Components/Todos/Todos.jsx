import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "../../store/actions/setTodo";
import { saveTodo } from "../../store/actions/saveTodo";
import { deleteTodo } from "../../store/actions/deleteTodo";
import FormTodo from "../FormTodo/FormTodo";
export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const createTodo = {
    name: "",
    status: false,
    id: "",
  };

  const newId = todos.length + 1;

  const onDelete = (todo) => {
    dispatch(deleteTodo(todo));
  };

  const onItemClick = (todo) => {
    dispatch(setTodo(todo));
  };

  const onSave = (todo) => {
    const findTodo = todos.find((item) => item.name === todo.name);
    if (todo.name !== "" && findTodo === undefined) {
      dispatch(saveTodo(todo));
    }
  };

  return (
    <>
      <TodoList todos={todos} onItemClick={onItemClick} onDelete={onDelete} />
      <FormTodo createTodo={createTodo} newId={newId} onSave={onSave} />
    </>
  );
}
