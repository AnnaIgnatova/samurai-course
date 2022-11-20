import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
