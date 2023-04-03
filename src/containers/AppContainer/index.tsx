import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import App from "../../App";
import { Loader } from "../../components/UI/Loader";
import { StateData } from "../../interfaces";
import { initializeAppThunk } from "../../redux/reducers/AppReducer";

export const AppContainer: React.FC = () => {
  const isInitialized = useSelector(
    (state: StateData) => state.app.isInitialized
  );
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(initializeAppThunk());
  }, []);

  if (!isInitialized) return <Loader />;
  return <App />;
};
