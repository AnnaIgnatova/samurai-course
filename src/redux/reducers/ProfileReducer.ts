import { stopSubmit } from "redux-form";
import { ProfileAPI, UsersAPI } from "../../api";
import { Action, Post, ProfileData, ProfileUserData } from "../../interfaces";

const CREATE_POST = "CREATE-POST";
const SET_PROFILE_DATA = "SET_PROFILE_DATA";
const GET_STATUS = "GET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PROFILE_PHOTO = "SAVE_PROFILE_PHOTO";
const LIKE_POST = "LIKE_POST";
const REMOVE_LIKE = "REMOVE_LIKE";
const PINNED_POST = "PINNED_POST";

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

export const savePhoto = (file: File) => ({
  type: SAVE_PROFILE_PHOTO,
  data: file,
});

export const likePost = (id: number) => ({
  type: LIKE_POST,
  data: id,
});

export const removeLike = (id: number) => ({
  type: REMOVE_LIKE,
  data: id,
});

export const pinPost = (id: number) => ({
  type: PINNED_POST,
  data: id,
});

export const initialState: ProfileData = {
  posts: [
    {
      id: 1,
      text: "Habitasse molestie vitae adipiscing dictumst. Faucibus. Ex. Aenean amet, sed interdum sapien dui sit ut. Non orci, efficitur sit nisi dolor dolor morbi morbi risus mattis morbi ultricies. Orci, vulputate efficitur interdum dictumst. Vel velit sit et. Dapibus venenatis sapien sit amet, dictum. Ipsum integer quam, sed id dolor quis, et. Integer lectus adipiscing et. Sodales mattis platea in faucibus. Velit integer mattis ultricies. Nisi nunc faucibus. Dictumst. Efficitur quam, lorem quam, interdum augue integer vel mattis nunc mattis et mattis in mattis habitasse cursus nulla pulvinar integer dolor efficitur sapien molestie id non eget non vel non risus dictum.",
      likes: 1,
      shares: 2,
      comments: 4,
      postDate: new Date().toLocaleString(),
      pinned: true,
    },
    {
      id: 2,
      text: "Non velit arcu nunc mollis ornare vestibulum consectetur aenean platea consectetur urna adipiscing mauris nec luctus ipsum mollis odio. Malesuada velit venenatis arcu aenean dapibus dolor cursus efficitur ultricies. Libero, integer libero, in dictum. Molestie justo cursus in integer urna dictumst. Augue risus lorem vestibulum mattis malesuada augue nisi molestie eleifend dictumst. Sit dictum. In cras nunc amet, vel eget et. Libero, efficitur vitae imperdiet luctus et sed molestie et morbi faucibus. Amet, urna quis, luctus tortor, nunc ultricies. Dictumst. Nec ultricies. Malesuada sit lacinia id risus nulla non cursus platea et lectus integer sit lectus sed non habitasse i.",
      likes: 3,
      shares: 3,
      comments: 5,
      postDate: new Date().toLocaleString(),
      pinned: true,
    },
    {
      id: 3,
      text: "Aenean leo, amet, risus molestie vel et orci, vel consectetur est. Vel molestie velit mollis dui elit. Nunc vel vel dictum non libero, vulputate molestie nisi risus dictum. Libero, amet, sed sit lacinia ultricies. Hac nisi amet, dictumst. Ornare ipsum sapien nec aenean hac leo, orci, orci, non interdum cursus in vel mattis vel ex. Ultricies. Lorem velit quis, id tortor, nec imperdiet risus pulvinar vestibulum lorem in mattis ex. In nulla ornare sit platea luctus in dictumst. Vestibulum dolor dolor adipiscing mauris mattis quis, et orci, urna sapien et non ex. Mauris mattis ut. Non amet, eleifend interdum ut.",
      likes: 4,
      shares: 5,
      comments: 4,
      postDate: new Date().toLocaleString(),
      pinned: false,
    },
    {
      id: 4,
      text: "Pellentesque venenatis amet, dapibus leo, interdum sed venenatis molestie pellentesque ornare lorem ultricies. Hac mauris vestibulum justo mollis pellentesque nisi vestibulum sapien cras dolor cras interdum mattis amet integer dictum mauris ultricies. Sit ornare morbi elit. Odio. Non sit molestie eleifend dictum consectetur sit vestibulum consectetur est. Hac quam, pellentesque accumsan odio. Tempus leo, eget dolor vel vestibulum nulla vel faucibus. Arcu in quis, vestibulum urna lectus nisi vulputate non id venenatis ex. Lacinia nulla arcu consectetur vulputate in molestie amet vel dui nisi ipsum et et habitasse adipiscing amet, ornare dui vitae ipsum vulputate dui libero, nec mattis elit.",
      likes: 5,
      shares: 2,
      comments: 2,
      postDate: new Date().toLocaleString(),
      pinned: false,
    },
    {
      id: 5,
      text: "Lectus aenean sit elit. Luctus nunc sit et sit dui vestibulum cursus morbi molestie ornare mauris tortor, tempus adipiscing dictum. Amet, sapien lorem urna dui eget eleifend ultricies. Faucibus. Dolor justo ornare lorem dolor in sapien velit odio. Dictum. Elit. Platea adipiscing mattis vestibulum platea et non molestie sit dui ultricies. Sodales luctus ornare non dolor sit molestie dictum mattis quam, ornare et. Elit. Mattis eleifend habitasse mattis vestibulum id ornare amet, justo tempus lorem eget consectetur et dapibus sit molestie pellentesque dapibus vel tortor, amet, mattis in hac odio. Molestie est. Venenatis quis, ex. Orci, sit quam, integer i.",
      likes: 1,
      shares: 3,
      comments: 3,
      postDate: new Date().toLocaleString(),
      pinned: false,
    },
  ],
  profileData: {
    userId: null,
    aboutMe: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    fullName: null,
    contacts: {
      github: null,
      vk: null,
      instagram: null,
      youtube: null,
    },
    photos: {
      small: null,
      large: null,
    },
  },
  status: null,
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
        posts: state.posts.filter((post: Post) => post.id !== data),
      };
    }
    case SAVE_PROFILE_PHOTO: {
      return {
        ...state,
        profileData: { ...state.profileData, photos: data },
      };
    }
    case LIKE_POST: {
      console.log("like", data);
      return {
        ...state,
        posts: [
          ...state.posts.map((post: Post) =>
            post.id === data ? { ...post, likes: post.likes + 1 } : post
          ),
        ],
      };
    }
    case REMOVE_LIKE: {
      return {
        ...state,
        posts: [
          ...state.posts.map((post: Post) =>
            post.id === data ? { ...post, likes: post.likes - 1 } : post
          ),
        ],
      };
    }
    case PINNED_POST: {
      return {
        ...state,
        posts: [
          ...state.posts.map((post: Post) =>
            post.id === data ? { ...post, pinned: !post.pinned } : post
          ),
        ].sort((post) => (post.pinned ? -1 : 1)),
      };
    }
    default:
      return state;
  }
};

export const getUserDataThunk = (userId: string) => async (dispatch: any) => {
  const data = await UsersAPI.getUserData(userId);
  dispatch(setProfileData(data));
};

export const getStatusDataThunk = (userId: string) => async (dispatch: any) => {
  const data = await ProfileAPI.getProfileStatus(userId);
  dispatch(getStatus(data));
};

export const updateStatusDataThunk =
  (text: string) => async (dispatch: any) => {
    await ProfileAPI.updateProfileStatus(text);
    dispatch(updateStatus(text));
  };

export const saveProfilePhotoThunk = (file: File) => async (dispatch: any) => {
  const data = await ProfileAPI.saveProfilePhoto(file);
  dispatch(savePhoto(data.photos));
};

export const saveProfileInfoThunk =
  (info: ProfileUserData) => async (dispatch: any, getState: any) => {
    const userId = getState().profilePage.profileData.userId;
    const data = await ProfileAPI.saveProfileInfo(info);
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
