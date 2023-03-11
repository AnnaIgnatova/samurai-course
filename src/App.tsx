import { Navigate, Route, Routes } from "react-router-dom";
import { Music } from "./components/Music";
import { News } from "./components/News";
import { Settings } from "./components/Settings";
import "./App.css";
import { NavbarContainer } from "./containers/NavbarContainer";
import UsersContainer from "./containers/UsersContainer";
import SettingsContainer from './containers/SettingsContainer';
import { AuthContainer } from "./containers/AuthContainer";
import { LoginContainer } from "./containers/LoginContainer";
import { Suspense } from "react";
import { Loader } from "./components/UI/Loader";
import React from "react";

const ProfileContainer = React.lazy(
  () => import("./containers/ProfileContainer")
);

const DialogsContainer = React.lazy(
  () => import("./containers/DialogsContainer")
);

const App: React.FC<any> = () => {
  return (
    <div className="container">
      <AuthContainer />
      <NavbarContainer />
      <div className="content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/profile/27789" />} />
            <Route path="/profile/:id" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<SettingsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
