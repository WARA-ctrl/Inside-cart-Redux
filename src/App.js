import React from "react";
import { Provider } from "react-redux";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import "./App.css";
// redux stuff
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}
export default App;
