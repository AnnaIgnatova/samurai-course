import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Music } from "./components/Music";
import { News } from "./components/News";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";
import "./App.css";
import { DialogsContainer } from "./containers/DialogsContainer";
import { NavbarContainer } from "./containers/NavbarContainer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <NavbarContainer />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
