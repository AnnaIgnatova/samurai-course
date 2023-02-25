import {
  deletePost,
  profileReducer,
  sendPost,
} from "../reducers/ProfileReducer";

const initialState = {
  posts: [
    {
      id: 1,
      text: "post 1",
      likes: 1,
    },
    {
      id: 2,
      text: "post 2",
      likes: 3,
    },
    {
      id: 3,
      text: "post 3",
      likes: 2,
    },
    {
      id: 4,
      text: "post 4",
      likes: 5,
    },
    {
      id: 5,
      text: "post 5",
      likes: 1,
    },
  ],
  profileData: {
    userId: 27789,
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    contacts: {
      github: "",
      vk: "",
      instagram: "",
      youtube: "",
    },
    photos: {
      small: "",
      large: "",
    },
  },
  status: "",
};

test("add post on profile page", () => {
  const action = sendPost("new text");
  const newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(6);
});

test("check new post text", () => {
  const action = sendPost("new text");
  const newState = profileReducer(initialState, action);
  expect(newState.posts[5].text).toBe("new text");
});

test("delete post", () => {
  const action = deletePost(1);
  const newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(4);
});
