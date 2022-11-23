import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dialogs } from "./components/Dialogs";
import { Header } from "./components/Header";
import { Music } from "./components/Music";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
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
