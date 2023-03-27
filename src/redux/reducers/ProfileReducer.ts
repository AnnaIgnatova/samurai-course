import { Action } from "redux";
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { ProfileAPI, UsersAPI } from "../../api";
import { Post, ProfileUserData, StateData } from "../../interfaces";
import { InferActionsType } from "../types";

export type ProfileActionCreatorsType = typeof ProfileActionCreators;

export const ProfileActionCreators = {
  sendPost: (data: string) =>
    ({
      type: "SOCIAL_NETWORK/PROFILE/CREATE-POST",
      data,
    } as const),
  setProfileData: (data: ProfileUserData) =>
    ({
      type: "SOCIAL_NETWORK/PROFILE/SET_PROFILE_DATA",
      data,
    } as const),
  getStatus: (data: string) =>
    ({
      type: "SOCIAL_NETWORK/PROFILE/GET_STATUS",
      data,
    } as const),
  updateStatus: (data: string) =>
    ({
      type: "SOCIAL_NETWORK/PROFILE/UPDATE_STATUS",
      data,
    } as const),
  deletePost: (id: number) =>
    ({
      type: "SOCIAL_NETWORK/PROFILE/DELETE_POST",
      data: id,
    } as const),
  savePhoto: (file: File) =>
    ({
      type: "SOCIAL_NETWORK/PROFILE/SAVE_PROFILE_PHOTO",
      data: file,
    } as const),
  likePost: (id: number) =>
    ({
      type: "SOCIAL_NETWORK/PROFILE/LIKE_POST",
      data: id,
    } as const),
  removeLike: (id: number) =>
    ({
      type: "SOCIAL_NETWORK/PROFILE/REMOVE_LIKE",
      data: id,
    } as const),
  pinPost: (id: number) =>
    ({
      type: "SOCIAL_NETWORK/PROFILE/PINNED_POST",
      data: id,
    } as const),
};

export const initialState = {
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
    userId: "",
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

export type ProfileReducerPayloadType = InferActionsType<
  typeof ProfileActionCreators
>;

export const profileReducer = (
  state = initialState,
  { type, data }: ProfileReducerPayloadType
) => {
  switch (type) {
    case "SOCIAL_NETWORK/PROFILE/CREATE-POST": {
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
    case "SOCIAL_NETWORK/PROFILE/SET_PROFILE_DATA": {
      return {
        ...state,
        profileData: data,
      };
    }
    case "SOCIAL_NETWORK/PROFILE/GET_STATUS": {
      return {
        ...state,
        status: data,
      };
    }
    case "SOCIAL_NETWORK/PROFILE/UPDATE_STATUS": {
      return {
        ...state,
        status: data,
      };
    }
    case "SOCIAL_NETWORK/PROFILE/DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((post: Post) => post.id !== data),
      };
    }
    case "SOCIAL_NETWORK/PROFILE/SAVE_PROFILE_PHOTO": {
      return {
        ...state,
        profileData: { ...state.profileData, photos: data },
      };
    }
    case "SOCIAL_NETWORK/PROFILE/LIKE_POST": {
      return {
        ...state,
        posts: [
          ...state.posts.map((post: Post) =>
            post.id === data ? { ...post, likes: post.likes + 1 } : post
          ),
        ],
      };
    }
    case "SOCIAL_NETWORK/PROFILE/REMOVE_LIKE": {
      return {
        ...state,
        posts: [
          ...state.posts.map((post: Post) =>
            post.id === data ? { ...post, likes: post.likes - 1 } : post
          ),
        ],
      };
    }
    case "SOCIAL_NETWORK/PROFILE/PINNED_POST": {
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

export const getUserDataThunk =
  (
    userId: string
  ): ThunkAction<Promise<void>, StateData, unknown, Action<string>> =>
  async (dispatch) => {
    const data = await UsersAPI.getUserData(userId);
    dispatch(ProfileActionCreators.setProfileData(data));
  };

export const getStatusDataThunk =
  (
    userId: string
  ): ThunkAction<Promise<void>, StateData, unknown, Action<string>> =>
  async (dispatch) => {
    const data = await ProfileAPI.getProfileStatus(userId);
    dispatch(ProfileActionCreators.getStatus(data));
  };

export const updateStatusDataThunk =
  (
    text: string
  ): ThunkAction<Promise<void>, StateData, unknown, Action<string>> =>
  async (dispatch) => {
    await ProfileAPI.updateProfileStatus(text);
    dispatch(ProfileActionCreators.updateStatus(text));
  };

export const saveProfilePhotoThunk =
  (
    file: File
  ): ThunkAction<Promise<void>, StateData, unknown, Action<string>> =>
  async (dispatch) => {
    const data = await ProfileAPI.saveProfilePhoto(file);
    dispatch(ProfileActionCreators.savePhoto(data.photos));
  };

export const saveProfileInfoThunk =
  (
    info: ProfileUserData
  ): ThunkAction<Promise<void>, StateData, unknown, Action<string>> =>
  async (dispatch, getState) => {
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
