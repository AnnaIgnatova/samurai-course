import { connect } from "react-redux";
import { StateData, UserData, UsersAPIContainerType } from "../../interfaces";
import React, { useEffect } from "react";
import { Users } from "../../components/Users";
import {
  followUserThunk,
  getUsersThunk,
  unfollowUserThunk,
  UsersActionCreators,
  UsersActionCreatorsType,
} from "../../redux/reducers/UsersReducer";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFilterByFriends,
  getFilterTerm,
  getIsAuth,
  getIsFetchingData,
  getIsUsersFollow,
  getPageCount,
  getTotalUsersCount,
  getUsersSelector,
} from "../../redux/reducers/UsersSelector";
import { FilterForm } from "../../components/Users/Filter";

const UsersAPIContainer: React.FC<
  UsersAPIContainerType & UsersActionCreatorsType
> = (props) => {
  const { filterTerm, filterByFriend, getUsersThunk } = props;
  useEffect(() => {
    getUsersThunk();
  }, [filterTerm, filterByFriend]);

  const handlePage = (page: number): void => {
    getUsersThunk(page);
  };

  return (
    <>
      <FilterForm setFilterTerm={props.setFilterTerm} />
      <Users {...props} handlePage={handlePage} />
    </>
  );
};

const mapStateToProps = (state: StateData) => ({
  users: getUsersSelector(state),
  totalCount: getTotalUsersCount(state),
  pageCount: getPageCount(state),
  currentPage: getCurrentPage(state),
  isFetchingData: getIsFetchingData(state),
  isUsersFollow: getIsUsersFollow(state),
  isAuth: getIsAuth(state),
  filterTerm: getFilterTerm(state),
  filterByFriend: getFilterByFriends(state),
});

export default compose<React.ComponentType>(
  // WithAuthRedirect,
  connect(mapStateToProps, {
    ...UsersActionCreators,
    followUserThunk,
    unfollowUserThunk,
    getUsersThunk,
  })
)(UsersAPIContainer);
