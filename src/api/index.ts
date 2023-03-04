import axios, { AxiosInstance } from "axios";

export interface AxiosInstanceData extends AxiosInstance {
  headers: {
    "API-KEY": string;
  };
}
// TODO: add objects for api methods

export const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    "API-KEY": "ae9800ba-d90a-49f1-a797-c5735dd50fe8",
  },
});

export const getUsers = async (page = 1) => {
  try {
    const { data } = await axiosInstance.get(`users?page=${page}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserData = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`profile/${id}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const authProfile = async () => {
  try {
    const { data } = await axiosInstance.get(`auth/me`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const logoutUser = async () => {
  try {
    const res = await axiosInstance.delete(`/auth/login`);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const unfollowUserAPI = async (id: number) => {
  try {
    const { data } = await axiosInstance.delete(`follow/${id}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const followUserAPI = async (id: number) => {
  try {
    const { data } = await axiosInstance.post(`follow/${id}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getProfileStatus = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/profile/status/${id}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateProfileStatus = async (text: string) => {
  try {
    const { statusText } = await axiosInstance.put(`/profile/status`, {
      status: text,
    });
    return statusText;
  } catch (e) {
    console.log(e);
  }
};

export const loginUser = async (
  email: string,
  password: string,
  rememberMe = false,
  captcha: string
) => {
  try {
    const { data } = await axiosInstance.post("auth/login", {
      email: email,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const saveProfilePhoto = async (file: any) => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const { data } = await axiosInstance.put("profile/photo", formData);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const saveProfileInfo = async (info: any) => {
  try {
    const { data } = await axiosInstance.put("profile", { ...info });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCaptchaImage = async () => {
  try {
    const { data } = await axiosInstance.get("/security/get-captcha-url");
    return data;
  } catch (e) {
    console.log(e);
  }
};
