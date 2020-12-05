import React from "react";
import { Provider } from "react-redux";
import "./config/ReactotronConfig";
import Routes from "./routes";
import store from "./store";

console.tron.log({ helo: "teu cu" });

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
