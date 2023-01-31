import { Action, ProfileData, ProfileUserData } from "../../interfaces";

const CREATE_POST = "CREATE-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_PROFILE_DATA = "SET_PROFILE_DATA";

export const sendPost = () => ({ type: CREATE_POST });

export const setProfileData = (data: ProfileUserData) => ({
  type: SET_PROFILE_DATA,
  data,
});

export const updatePostText = (text: string) => ({
  type: UPDATE_POST_TEXT,
  data: text,
});

export const initialState = {
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
  newPost: "",
  profileData: {
    userId: 3,
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
};

export const profileReducer = (
  state: ProfileData = initialState,
  { type, data }: Action
) => {
  switch (type) {
    case CREATE_POST: {
      const post = {
        id: state.posts[state.posts.length - 1].id + 1,
        text: state.newPost,
        likes: Math.floor(Math.random() * 10),
      };
      return {
        ...state,
        posts: [...state.posts, post],
        newPost: "",
      };
    }
    case UPDATE_POST_TEXT: {
      return {
        ...state,
        newPost: data,
      };
    }
    case SET_PROFILE_DATA: {
      return {
        ...state,
        profileData: data,
      };
    }
    default:
      return state;
  }
};
