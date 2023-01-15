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

const App: React.FC<AppData> = ({
  state,
  createPost,
  sendMessage,
  updateMessageText,
  updatePostText,
}) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar state={state.navbar} />
        <div className="content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  state={state.profilePage}
                  createPost={createPost}
                  updatePostText={updatePostText}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  state={state.dialogsPage}
                  sendMessage={sendMessage}
                  updateMessageText={updateMessageText}
                />
              }
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
