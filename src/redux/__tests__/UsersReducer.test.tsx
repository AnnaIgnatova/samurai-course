import { UsersData } from "../../interfaces";
import {
  followUserThunk,
  unfollowUserThunk,
  UsersActionCreators,
  usersReducer,
} from "../reducers/UsersReducer";
import { UsersAPI } from "../../api";
jest.mock("../../api");

const mockedAPI = UsersAPI as jest.Mocked<typeof UsersAPI>;

const res = {
  resultCode: 0,
  data: {},
  messages: [],
};

mockedAPI.followUserAPI.mockReturnValue(Promise.resolve(res));

const initialState: UsersData = {
  users: [
    {
      name: "Suhrob",
      id: 28594,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: false,
    },
    {
      name: "selectazZ",
      id: 28593,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: true,
    },
    {
      name: "selecta_zZ",
      id: 28592,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: false,
    },
  ],
  totalCount: 0,
  pageCount: 5,
  currentPage: 1,
  isFetchingData: true,
  isUsersFollow: [],
};

test("follow user", () => {
  const action = UsersActionCreators.followUser(28594);
  const newState = usersReducer(initialState, action);
  expect(newState.users[0].followed).toBeTruthy();
});

test("unfollow user", () => {
  const action = UsersActionCreators.unfollowUser(28593);
  const newState = usersReducer(initialState, action);
  expect(newState.users[1].followed).toBeFalsy();
});

test("follow thunk", async () => {
  const thunk = followUserThunk(28594);
  const dispatchMock = jest.fn();
  const getStateMock = jest.fn();

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    UsersActionCreators.setUserFollowed(28594, true)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    2,
    UsersActionCreators.followUser(28594)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    UsersActionCreators.setUserFollowed(28594, false)
  );
});

test("unfollow thunk", async () => {
  const thunk = unfollowUserThunk(28594);
  const dispatchMock = jest.fn();
  const getStateMock = jest.fn();

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    UsersActionCreators.setUserFollowed(28594, true)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    2,
    UsersActionCreators.unfollowUser(28594)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    UsersActionCreators.setUserFollowed(28594, false)
  );
});
