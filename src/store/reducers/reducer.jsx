import { SET_TODOS } from "../actions/setTodo";
import { SAVE_TODO } from "../actions/saveTodo";
import { DELETE_TODO } from "../actions/deleteTodo";

const INITIAL_STATE = {
  todos: [
    { name: "SHOPPING", id: "1", status: true },
    { name: "READING", id: "2", status: true },
    { name: "CHILLING", id: "3", status: true },
    { name: "PLAY FOOTBALL", id: "4", status: false },
    { name: "SWIMMING", id: "5", status: true },
    { name: "TEACHING", id: "6", status: false },
    { name: "FISHING", id: "7", status: true },
  ],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_TODOS:
      const newTodos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, status: !todo.status } : todo
      );
      return { todos: newTodos };
    case SAVE_TODO:
      const savedTodos = [...state.todos, payload];
      return { todos: savedTodos };
    case DELETE_TODO:
      const deleteTodo = state.todos.filter((todo) => todo.id !== payload.id);
      return { todos: deleteTodo };
    default:
      return state;
  }
}
