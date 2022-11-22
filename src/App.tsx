import "./App.css";
import { Dialogs } from "./components/Dialogs";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div className="content">
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
};

export default App;
