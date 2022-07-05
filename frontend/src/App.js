import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
