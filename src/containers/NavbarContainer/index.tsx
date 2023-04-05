import { useSelector } from "react-redux";
import { StateData } from "../../interfaces";
import { Navbar } from "../../components/Navbar";

export const NavbarContainer = () => {
  const friendsIds = useSelector((state: StateData) => state.navbar.friendsIds);
  return <Navbar friendsIds={friendsIds} />;
};
