import {
  createUsers,
  deleteUser,
  editUser,
  getUsers,
} from "../../services/service";

export const DELETE_USER = "DELETE_USER";
export const SAVE_USER = "SAVE_USER";
export const SET_USER = "SET_USER";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const EDIT_USER = "EDIT_USER";
export const GET_NEW_USERS = "GET_NEW_USERS";

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const editNewUser = (payload) => ({
  type: ADD_NEW_USER,
  payload,
});

export const getNewUsers = (payload) => ({
  type: GET_NEW_USERS,
  payload,
});

export const fetchUsersThunk = () => {
  return function (dispatch) {
    getUsers().then((data) => dispatch(getNewUsers(data)));
  };
};

export const deleteUserThunk = (payload) => {
  return function (dispatch, getState) {
    const users = getState();
    const newUsers = users.users.filter((user) => user.id !== payload.id);
    deleteUser(payload).then(()=>dispatch(getNewUsers(newUsers)))
    dispatch(getNewUsers(newUsers))
    ;
  };
};

export const createUserThunk = (payload) => {
  return function (dispatch, getState) {
    const users = getState();
    const newUsers = [...users.users, payload];
    createUsers(payload).then(()=>dispatch(getNewUsers(newUsers)));
  };
};

export const editUserThunk = (payload) => {
  return function (dispatch, getState) {
    const users = getState();
    const newUsers = users.users.filter((user) =>
      user.id === payload.id ? payload : user
    );
    editUser(payload).then(()=>dispatch(getNewUsers(newUsers)));
  };
};
