import axios, { AxiosInstance } from "axios";

export interface AxiosInstanceData extends AxiosInstance {
  headers: {
    API_URL: string;
  };
}
// TODO: add objects for api methods

export const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const getUsers = async (page = 1) => {
  const { data } = await axiosInstance.get(`users?page=${page}`);
  return data;
};

export const getUserData = async (id: string) => {
  const { data } = await axiosInstance.get(`profile/${id}`);
  return data;
};

export const authProfile = async () => {
  const { data } = await axiosInstance.get(`auth/me`);
  return data;
};

export const logoutUser = async () => {
  const res = await axiosInstance.delete(`/auth/login`);
  return res;
};

export const unfollowUserAPI = async (id: number) => {
  const { data } = await axiosInstance.delete(`follow/${id}`);
  return data;
};

export const followUserAPI = async (id: number) => {
  const { data } = await axiosInstance.post(`follow/${id}`);
  return data;
};

export const getProfileStatus = async (id: string) => {
  const { data } = await axiosInstance.get(`/profile/status/${id}`);
  return data;
};

export const updateProfileStatus = async (text: string) => {
  const { statusText } = await axiosInstance.put(`/profile/status`, {
    status: text,
  });
  return statusText;
};

export const loginUser = async (
  email: string,
  password: string,
  rememberMe = false
) => {
  const { data } = await axiosInstance.post("auth/login", {
    email: email,
    password: password,
    rememberMe: rememberMe,
  });
  return data;
};
