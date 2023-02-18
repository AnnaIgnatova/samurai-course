import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Music } from "./components/Music";
import { News } from "./components/News";
import { Settings } from "./components/Settings";
import "./App.css";
import DialogsContainer from "./containers/DialogsContainer";
import { NavbarContainer } from "./containers/NavbarContainer";
import UsersContainer from "./containers/UsersContainer";
import ProfileContainer from "./containers/ProfileContainer";
import { AuthContainer } from "./containers/AuthContainer";
import { LoginContainer } from "./containers/LoginContainer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <AuthContainer />
        <NavbarContainer />
        <div className="content">
          <Routes>
            <Route path="/profile/:id" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
