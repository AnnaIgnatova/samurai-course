import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { StateData } from "../../interfaces";
import { logoutUserThunk } from "../../redux/reducers/AuthReducer";
import { useNavigate } from "react-router-dom";

// TO DO: selectors from file

export const AuthContainer: React.FC = () => {
  const navigate = useNavigate();
  const imgUrl = useSelector(
    (state: StateData) => state.profilePage.profileData.photos?.small
  );
  const isAuth = useSelector((state: StateData) => state.header.isAuth);

  const dispatch: any = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUserThunk());
    navigate("/login");
  };

  return <Header isAuth={isAuth} imgUrl={imgUrl} handleLogout={handleLogout} />;
};
