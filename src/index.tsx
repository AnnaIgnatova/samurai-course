import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux";
import { Provider } from "react-redux";
import AppContainer from "./containers/AppContainer";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const MainApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  );
};

root.render(<MainApp />);

export default MainApp;
