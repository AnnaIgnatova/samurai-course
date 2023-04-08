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
import { useSearchParams } from "react-router-dom";

// TODO: add selectors

const UsersContainer: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
    const term =
      searchParams.get("term") !== null ? searchParams.get("term") : "";
    const friend =
      searchParams.get("friend") !== "null" &&
      searchParams.get("friend") !== null
        ? searchParams.get("friend")
        : "null";
    const page =
      searchParams.get("page") !== null ? Number(searchParams.get("page")) : 1;

    dispatch(UsersActionCreators.setFilterTerm(term, friend));
    dispatch(UsersActionCreators.setCurrentPage(page));
    dispatch(getUsersThunk(page, term, friend));

    return () => {
      dispatch(UsersActionCreators.setCurrentPage(1));
    };
  }, []);

  useEffect(() => {
    dispatch(getUsersThunk(currentPage));
  }, [filterTerm, filterByFriend]);

  useEffect(() => {
    let params = {};
    if (filterTerm) params = { ...params, term: filterTerm };
    if (filterByFriend && filterByFriend !== "null")
      params = { ...params, friend: filterByFriend };
    if (currentPage && currentPage !== 1)
      params = { ...params, page: currentPage };
    setSearchParams({
      ...params,
    });
  }, [filterTerm, filterByFriend, currentPage]);

  const handlePage = (page: number): void => {
    dispatch(getUsersThunk(page));
  };

  return (
    <>
      <FilterForm
        setFilterTerm={UsersActionCreators.setFilterTerm}
        term={filterTerm}
        byFriend={String(filterByFriend)}
      />
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
