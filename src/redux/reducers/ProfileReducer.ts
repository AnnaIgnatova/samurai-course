import { stopSubmit } from "redux-form";
import {
  getProfileStatus,
  getUserData,
  updateProfileStatus,
  saveProfilePhoto,
  saveProfileInfo,
} from "../../api";
import { Action, ProfileData, ProfileUserData } from "../../interfaces";

const CREATE_POST = "CREATE-POST";
const SET_PROFILE_DATA = "SET_PROFILE_DATA";
const GET_STATUS = "GET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PROFILE_PHOTO = "SAVE_PROFILE_PHOTO";

export const sendPost = (data: string) => ({ type: CREATE_POST, data });

export const setProfileData = (data: ProfileUserData) => ({
  type: SET_PROFILE_DATA,
  data,
});

export const getStatus = (data: string) => ({
  type: GET_STATUS,
  data,
});

export const updateStatus = (data: string) => ({
  type: UPDATE_STATUS,
  data,
});

export const deletePost = (id: number) => ({
  type: DELETE_POST,
  data: id,
});

export const savePhoto = (file: any) => ({
  type: SAVE_PROFILE_PHOTO,
  data: file,
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

export const profileReducer = (
  state: ProfileData = initialState,
  { type, data }: Action
) => {
  switch (type) {
    case CREATE_POST: {
      const post = {
        id: state.posts[state.posts.length - 1].id + 1,
        text: data,
        likes: Math.floor(Math.random() * 10),
      };
      return {
        ...state,
        posts: [...state.posts, post],
        newPost: "",
      };
    }
    case SET_PROFILE_DATA: {
      return {
        ...state,
        profileData: data,
      };
    }
    case GET_STATUS: {
      return {
        ...state,
        status: data,
      };
    }
    case UPDATE_STATUS: {
      return {
        ...state,
        status: data,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== data),
      };
    }
    case SAVE_PROFILE_PHOTO: {
      return {
        ...state,
        profileData: { ...state.profileData, photos: data },
      };
    }
    default:
      return state;
  }
};

export const getUserDataThunk = (userId: string) => async (dispatch: any) => {
  const data = await getUserData(userId);
  dispatch(setProfileData(data));
};

export const getStatusDataThunk = (userId: string) => async (dispatch: any) => {
  const data = await getProfileStatus(userId);
  dispatch(getStatus(data));
};

export const updateStatusDataThunk =
  (text: string) => async (dispatch: any) => {
    await updateProfileStatus(text);
    dispatch(updateStatus(text));
  };

export const saveProfilePhotoThunk = (file: any) => async (dispatch: any) => {
  const data = await saveProfilePhoto(file);
  dispatch(savePhoto(data.photos));
};

export const saveProfileInfoThunk =
  (info: any) => async (dispatch: any, getState: any) => {
    const userId = getState().profilePage.profileData.userId;
    const data = await saveProfileInfo(info);
    if (!data.resultCode) dispatch(getUserDataThunk(userId));
    else {
      dispatch(
        stopSubmit("profileInfo", {
          _error: data.messages ? data.messages[0] : "Some error",
        })
      );
    }
    return data.resultCode;
  };
