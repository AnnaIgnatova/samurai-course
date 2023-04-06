import { useDispatch, useSelector } from "react-redux";
import { StateData } from "../../interfaces";
import React, { useEffect } from "react";
import { Users } from "../../components/Users";
import {
  followUserThunk,
  getUsersThunk,
  unfollowUserThunk,
  UsersActionCreators,
} from "../../redux/reducers/UsersReducer";
import { FilterForm } from "../../components/Users/Filter";

const UsersContainer: React.FC = () => {
  const users = useSelector((state: StateData) => state.usersPage.users);
  const totalCount = useSelector(
    (state: StateData) => state.usersPage.totalCount
  );
  const pageCount = useSelector(
    (state: StateData) => state.usersPage.pageCount
  );
  const currentPage = useSelector(
    (state: StateData) => state.usersPage.currentPage
  );
  const isFetchingData = useSelector(
    (state: StateData) => state.usersPage.isFetchingData
  );
  const isUsersFollow = useSelector(
    (state: StateData) => state.usersPage.isUsersFollow
  );
  const filterTerm = useSelector(
    (state: StateData) => state.usersPage.filterTerm
  );
  const filterByFriend = useSelector(
    (state: StateData) => state.usersPage.filterByFriend
  );

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [filterTerm, filterByFriend]);

  const handlePage = (page: number): void => {
    dispatch(getUsersThunk(page));
  };

  return (
    <>
      <FilterForm setFilterTerm={UsersActionCreators.setFilterTerm} />
      <Users
        users={users}
        totalCount={totalCount}
        pageCount={pageCount}
        currentPage={currentPage}
        isFetchingData={isFetchingData}
        isUsersFollow={isUsersFollow}
        handlePage={handlePage}
        unfollowUserThunk={unfollowUserThunk}
        followUserThunk={followUserThunk}
      />
    </>
  );
};

export default UsersContainer;
