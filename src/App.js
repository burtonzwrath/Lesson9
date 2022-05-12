import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import Form from "./Components/Form/Form";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={"/users"} element={<UsersContainer />} />
          <Route path={"/users/create"} element={<Form />} />
          <Route path={"/users/edit/:id"} element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
