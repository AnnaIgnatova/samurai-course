import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { UsersAPI } from "../../api";
import { StateData, UserData, UsersData } from "../../interfaces";
import { InferActionsType } from "../types";

export type UsersActionCreatorsType = typeof UsersActionCreators;

export const UsersActionCreators = {
  followUser: (id: number) =>
    ({
      type: "SOCIAL_NETWORK/USERS/FOLLOW",
      data: id,
    } as const),
  unfollowUser: (id: number) =>
    ({
      type: "SOCIAL_NETWORK/USERS/UNFOLLOW",
      data: id,
    } as const),
  setUsers: (users: UserData[]) =>
    ({
      type: "SOCIAL_NETWORK/USERS/SET_USERS",
      data: users,
    } as const),
  setCurrentPage: (page?: number) =>
    ({
      type: "SOCIAL_NETWORK/USERS/SET_CURRENT_PAGE",
      data: page || 1,
    } as const),
  setTotalUsersCount: (count: number) =>
    ({
      type: "SOCIAL_NETWORK/USERS/SET_TOTAL_USERS_COUNT",
      data: count,
    } as const),
  setFetchingData: (isFetchind: boolean) =>
    ({
      type: "SOCIAL_NETWORK/USERS/SET_FETCHING_USERS",
      data: isFetchind,
    } as const),
  setUserFollowed: (id: number, isFetching: boolean) =>
    ({
      type: "SOCIAL_NETWORK/USERS/SET_USER_FOLLOWED",
      data: { id, isFetching },
    } as const),
  setFilterTerm: (term: string, isFriend?: string) =>
    ({
      type: "SOCIAL_NETWORK/USERS/SET_FILTER_TERM",
      data: { term, isFriend },
    } as const),
};

export const initialState: UsersData = {
  users: [],
  totalCount: 0,
  pageCount: 5,
  currentPage: 1,
  isFetchingData: true,
  isUsersFollow: [],
  filterTerm: "",
  filterByFriend: null,
};
export type UsersReducerPayloadType = InferActionsType<
  typeof UsersActionCreators
>;

export const usersReducer = (
  state = initialState,
  { type, data }: UsersReducerPayloadType
) => {
  switch (type) {
    case "SOCIAL_NETWORK/USERS/FOLLOW": {
      return {
        ...state,
        users: state.users.map((user: UserData) => {
          if (user.id === data) return { ...user, followed: true };
          return user;
        }),
      };
    }
    case "SOCIAL_NETWORK/USERS/UNFOLLOW": {
      return {
        ...state,
        users: state.users.map((user: UserData) => {
          if (user.id === data) return { ...user, followed: false };
          return user;
        }),
      };
    }
    case "SOCIAL_NETWORK/USERS/SET_USERS": {
      return {
        ...state,
        users: [...data],
      };
    }
    case "SOCIAL_NETWORK/USERS/SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: data,
      };
    }
    case "SOCIAL_NETWORK/USERS/SET_TOTAL_USERS_COUNT": {
      return {
        ...state,
        totalCount: data,
      };
    }
    case "SOCIAL_NETWORK/USERS/SET_FETCHING_USERS": {
      return {
        ...state,
        isFetchingData: data,
      };
    }
    case "SOCIAL_NETWORK/USERS/SET_USER_FOLLOWED": {
      return {
        ...state,
        isUsersFollow: data.isFetching
          ? [...state.isUsersFollow, data.id]
          : state.isUsersFollow.filter((val) => val !== data.id),
      };
    }
    case "SOCIAL_NETWORK/USERS/SET_FILTER_TERM": {
      return {
        ...state,
        filterTerm: data.term,
        filterByFriend: data.isFriend,
      };
    }

    default:
      return state;
  }
};

export const getUsersThunk =
  (
    page?: number
  ): ThunkAction<Promise<void>, StateData, unknown, Action<string>> =>
  async (dispatch, getState) => {
    dispatch(UsersActionCreators.setFetchingData(true));
    const data = await UsersAPI.getUsers(
      page,
      getState().usersPage.filterTerm,
      getState().usersPage.filterByFriend
    );
    dispatch(UsersActionCreators.setFetchingData(false));
    dispatch(UsersActionCreators.setUsers(data.items));
    dispatch(UsersActionCreators.setTotalUsersCount(data.totalCount));
    dispatch(UsersActionCreators.setCurrentPage(page));
  };

export const followUserThunk =
  (
    id: number
  ): ThunkAction<Promise<void>, StateData, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(UsersActionCreators.setUserFollowed(id, true));
    await UsersAPI.followUserAPI(id);
    dispatch(UsersActionCreators.followUser(id));
    dispatch(UsersActionCreators.setUserFollowed(id, false));
  };

export const unfollowUserThunk =
  (
    id: number
  ): ThunkAction<Promise<void>, StateData, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(UsersActionCreators.setUserFollowed(id, true));
    await UsersAPI.unfollowUserAPI(id);
    dispatch(UsersActionCreators.unfollowUser(id));
    dispatch(UsersActionCreators.setUserFollowed(id, false));
  };
