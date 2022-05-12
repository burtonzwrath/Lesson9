import axios from "axios";

export const getUsers = () => {
  return axios
    .get("https://612687da3ab4100017a68fd8.mockapi.io/users")
    .then((resp) => resp.data);
};

export const deleteUser = (user) => {
  return axios
    .delete("https://612687da3ab4100017a68fd8.mockapi.io/users/" + user.id)
    .then((resp) => resp.data);
};

export const createUsers = (user) => {
  return axios.post(
    "https://612687da3ab4100017a68fd8.mockapi.io/users/",
    user,
    { headers: { "Content-Type": "application/json" } }
  );
};

export const editUser = (user) => {
  return axios.put(
    "https://612687da3ab4100017a68fd8.mockapi.io/users/" + user.id,
    user,
    { headers: { "Content-Type": "application/json" } }
  );
};
