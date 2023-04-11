import { Navigate, Route, Routes } from "react-router-dom";
import { Music } from "./components/Music";
import { News } from "./components/News";
import "./App.css";
import { NavbarContainer } from "./containers/NavbarContainer";
import SettingsContainer from "./containers/SettingsContainer";
import { AuthContainer } from "./containers/AuthContainer";
import { Suspense } from "react";
import { Loader } from "./components/UI/Loader";
import React from "react";
import { LoginForm } from "./components/Login";


const Profile = React.lazy(() => import("./components/Profile"));

const DialogsContainer = React.lazy(
  () => import("./containers/DialogsContainer")
);

const UsersContainer = React.lazy(() => import("./containers/UsersContainer"));

const App: React.FC = () => {
  return (
    <div className="container">
      <AuthContainer />
      <NavbarContainer />
      <div className="content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/profile/27789" />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<SettingsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
