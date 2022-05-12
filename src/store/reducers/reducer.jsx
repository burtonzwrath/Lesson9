import {
  DELETE_USER,
  SAVE_USER,
  SET_USER,
  ADD_NEW_USER,
  EDIT_USER,
  GET_NEW_USERS,
} from "../actions/actions";

const INITIAL_STATE = {
  users: [],
  newUser: {},
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_NEW_USERS:
      return { ...state, users: payload };

    case EDIT_USER:
      const newUsersArr = state.users.map((user) =>
        user.id === payload.id ? payload : user
      );
      console.log(newUsersArr);
      return { ...state, users: newUsersArr };

    case ADD_NEW_USER:
      return { ...state, newUser: payload };

    case SET_USER:
      const newUsers = state.users.map((user) =>
        user.id === payload.id ? { ...user, status: !user.status } : user
      );
      return { users: newUsers };
    case SAVE_USER:
      const savedUsers = [...state.users, payload];
      return { users: savedUsers };
    case DELETE_USER:
      const deleteuser = state.users.filter((user) => user.id !== payload.id);
      return { users: deleteuser };
    default:
      return state;
  }
}
