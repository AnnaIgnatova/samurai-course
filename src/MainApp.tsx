import { store } from "./redux";
import { Provider } from "react-redux";
import AppContainer from "./containers/AppContainer";
import { BrowserRouter } from "react-router-dom";

export const MainApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  );
};
