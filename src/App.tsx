import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Music } from "./components/Music";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";
import "./App.css";
import { DialogsContainer } from "./containers/DialogsContainer";

const App: React.FC<any> = ({ store }) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar store={store} />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile store={store} />} />
            <Route
              path="/dialogs/*"
              element={<DialogsContainer store={store} />}
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
