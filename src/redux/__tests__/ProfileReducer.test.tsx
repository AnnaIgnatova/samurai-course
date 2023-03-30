import {
  profileReducer,
  ProfileActionCreators,
} from "../reducers/ProfileReducer";

const initialState = {
  posts: [
    {
      id: 1,
      text: "post 1",
      likes: 1,
      shares: 2,
      comments: 3,
      pinned: true,
      postDate: new Date().toDateString(),
    },
    {
      id: 2,
      text: "post 2",
      likes: 3,
      shares: 2,
      comments: 3,
      pinned: true,
      postDate: new Date().toDateString(),
    },
    {
      id: 3,
      text: "post 3",
      likes: 2,
      shares: 2,
      comments: 3,
      pinned: true,
      postDate: new Date().toDateString(),
    },
    {
      id: 4,
      text: "post 4",
      likes: 5,
      shares: 2,
      comments: 3,
      pinned: true,
      postDate: new Date().toDateString(),
    },
    {
      id: 5,
      text: "post 5",
      likes: 1,
      shares: 2,
      comments: 3,
      pinned: true,
      postDate: new Date().toDateString(),
    },
  ],
  profileData: {
    userId: 27789,
    aboutMe: "",
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
  const action = ProfileActionCreators.sendPost("new text");
  const newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(6);
});

test("check new post text", () => {
  const action = ProfileActionCreators.sendPost("new text");
  const newState = profileReducer(initialState, action);
  expect(newState.posts[5].text).toBe("new text");
});

test("delete post", () => {
  const action = ProfileActionCreators.deletePost(1);
  const newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(4);
});
