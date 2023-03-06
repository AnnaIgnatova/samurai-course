import { UsersAPI } from "../../api";
import { Action, UserData, UsersData } from "../../interfaces";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_FETCHING_USERS = "SET_FETCHING_USERS";
const SET_USER_FOLLOWED = "SET_USER_FOLLOWED";

export const followUser = (id: number) => ({
  type: FOLLOW,
  data: id,
});

export const unfollowUser = (id: number) => ({
  type: UNFOLLOW,
  data: id,
});

export const setUsers = (users: UserData[]) => ({
  type: SET_USERS,
  data: users,
});

export const setCurrentPage = (page?: number) => ({
  type: SET_CURRENT_PAGE,
  data: page || 1,
});

export const setTotalUsersCount = (count: number) => ({
  type: SET_TOTAL_USERS_COUNT,
  data: count,
});

export const setFetchingData = (isFetchind: boolean) => ({
  type: SET_FETCHING_USERS,
  data: isFetchind,
});

export const setUserFollowed = (id: number, isFetching: boolean) => ({
  type: SET_USER_FOLLOWED,
  data: { id, isFetching },
});

export const initialState: UsersData = {
  users: [],
  totalCount: 0,
  pageCount: 5,
  currentPage: 1,
  isFetchingData: true,
  isUsersFollow: [],
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
    case SET_FETCHING_USERS: {
      return {
        ...state,
        isFetchingData: data,
      };
    }
    case SET_USER_FOLLOWED: {
      return {
        ...state,
        isUsersFollow: data.isFetching
          ? [...state.isUsersFollow, data.id]
          : state.isUsersFollow.filter((val) => val !== data.id),
      };
    }
    default:
      return state;
  }
};

export const getUsersThunk = (page?: number) => async (dispatch: any) => {
  dispatch(setFetchingData(true));
  const data = await UsersAPI.getUsers(page);
  dispatch(setFetchingData(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
  dispatch(setCurrentPage(page));
};

export const followUserThunk = (id: number) => async (dispatch: any) => {
  dispatch(setUserFollowed(id, true));
  await UsersAPI.followUserAPI(id);
  dispatch(followUser(id));
  dispatch(setUserFollowed(id, false));
};

export const unfollowUserThunk = (id: number) => async (dispatch: any) => {
  dispatch(setUserFollowed(id, true));
  await UsersAPI.unfollowUserAPI(id);
  dispatch(unfollowUser(id));
  dispatch(setUserFollowed(id, false));
};
