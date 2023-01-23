import { Action, UserData, UsersData } from "../../interfaces";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

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

export const initialState: UsersData = {
  users: [
    {
      id: 1,
      name: "Anna",
      isFollow: true,
      imgUrl: "./assets/friends/friend-1.png",
      location: { city: "Perm", country: "Russia" },
    },
    {
      id: 2,
      name: "Sasha",
      isFollow: false,
      imgUrl: "./assets/friends/friend-2.png",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 3,
      name: "Andrew",
      isFollow: true,
      imgUrl: "./assets/friends/friend-5.png",
      location: { city: "Kazan", country: "Russia" },
    },
  ],
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
          if (user.id === data) return { ...user, isFollow: true };
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === data) return { ...user, isFollow: false };
          return user;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...data],
      };
    }
    default:
      return state;
  }
};
