import axios, { AxiosInstance } from "axios";

export interface AxiosInstanceData extends AxiosInstance {
  headers: {
    API_URL: string;
  };
}

export const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const getUsers = async (page = 1) => {
  return axiosInstance.get(`users?page=${page}`).then(({ data }) => data);
};

export const getUserData = async (id: string) => {
  return axiosInstance.get(`profile/${id}`).then(({ data }) => data);
};

export const authProfile = async () => {
  return axiosInstance.get(`auth/me`).then(({ data }) => data);
};

export const unfollowUserAPI = async (id: number) => {
  return axiosInstance.delete(`follow/${id}`).then(({ data }) => data);
};

export const followUserAPI = async (id: number) => {
  return axiosInstance.post(`follow/${id}`).then(({ data }) => data);
};

export const getProfileStatus = async (id: string) => {
  return axiosInstance.get(`/profile/status/${id}`).then(({ data }) => data);
};

export const updateProfileStatus = async (text: string) => {
  return axiosInstance
    .put(`/profile/status`, { status: text })
    .then(({ data }) => data);
};
