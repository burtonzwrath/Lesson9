import Todos from "./Components/Todos/Todos";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
