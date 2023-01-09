import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dialogs } from "./components/Dialogs";
import { Header } from "./components/Header";
import { Music } from "./components/Music";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";
import "./App.css";
import { AppData } from "./interfaces";

const App: React.FC<AppData> = ({ dialogs, messages, posts }) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile posts={posts} />} />
            <Route
              path="/dialogs/*"
              element={<Dialogs dialogs={dialogs} messages={messages} />}
            />
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
