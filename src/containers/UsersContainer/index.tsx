import { useSelector } from "react-redux";
import { StateData } from "../../interfaces";
import React, { useEffect } from "react";
import { Users } from "../../components/Users";
import { getUsersThunk } from "../../redux/reducers/UsersReducer";
import { FilterForm } from "../../components/Users/Filter";

// TODO: import thunk from container component

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

  useEffect(() => {
    getUsersThunk();
  }, [filterTerm, filterByFriend]);

  const handlePage = (page: number): void => {
    getUsersThunk(page);
  };

  return (
    <>
      <FilterForm />
      <Users
        users={users}
        totalCount={totalCount}
        pageCount={pageCount}
        currentPage={currentPage}
        isFetchingData={isFetchingData}
        isUsersFollow={isUsersFollow}
        handlePage={handlePage}
      />
    </>
  );
};

export default UsersContainer;
