import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/cakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div>Redux demo</div>
      <CakeContainer />
    </Provider>
  );
}

export default App;
