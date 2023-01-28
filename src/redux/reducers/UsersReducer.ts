import { Action, UserData, UsersData } from "../../interfaces";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

export const followUserActionCreator = (id: number) => ({
  type: FOLLOW,
  data: id,
});

export const unfollowUserActionCreator = (id: number) => ({
  type: UNFOLLOW,
  data: id,
});

export const setUsersActionCreator = (users: UserData[]) => ({
  type: SET_USERS,
  data: users,
});

export const setCurrentPageActionCreator = (page: number) => ({
  type: SET_CURRENT_PAGE,
  data: page,
});

export const setTotalUsersCountActionCreator = (count: number) => ({
  type: SET_TOTAL_USERS_COUNT,
  data: count,
});

export const initialState: UsersData = {
  users: [],
  totalCount: 0,
  pageCount: 5,
  currentPage: 1,
};

export const usersReducer = (
  state: UsersData = initialState,
  { type, data }: Action
) => {
  switch (type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === data) return { ...user, followed: true };
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === data) return { ...user, followed: false };
          return user;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...data],
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: data,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalCount: data,
      };
    }
    default:
      return state;
  }
};
