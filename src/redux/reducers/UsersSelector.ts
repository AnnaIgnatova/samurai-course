import { StateData } from "../../interfaces";

export const getUsersSelector = (state: StateData) => state.usersPage.users;

export const getTotalUsersCount = (state: StateData) =>
  state.usersPage.totalCount;

export const getPageCount = (state: StateData) => state.usersPage.pageCount;

export const getCurrentPage = (state: StateData) => state.usersPage.currentPage;

export const getIsFetchingData = (state: StateData) =>
  state.usersPage.isFetchingData;

export const getIsUsersFollow = (state: StateData) =>
  state.usersPage.isUsersFollow;

export const getIsAuth = (state: StateData) => state.header.isAuth;

export const getFilterTerm = (state: StateData) => state.usersPage.filterTerm;

export const getFilterByFriends = (state: StateData) =>
  state.usersPage.filterByFriend;
