import { connect } from "react-redux";
import { StateData } from "../../interfaces";
import { Navbar } from "../../components/Navbar";

const mapStateToProps = (state: StateData) => ({
  friendsIds: state.navbar.friendsIds,
});

export const NavbarContainer = connect(mapStateToProps, {})(Navbar);
