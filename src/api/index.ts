import axios, { AxiosInstance } from "axios";
import { ProfileUserData } from "../interfaces";

export interface AxiosInstanceData extends AxiosInstance {
  headers: {
    "API-KEY": string;
  };
}

export const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    "API-KEY": "ae9800ba-d90a-49f1-a797-c5735dd50fe8",
  },
});

export const UsersAPI = {
  async getUsers(page = 1) {
    try {
      const { data } = await axiosInstance.get(`users?page=${page}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async getUserData(id: string) {
    try {
      const { data } = await axiosInstance.get(`profile/${id}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async unfollowUserAPI(id: number) {
    try {
      const { data } = await axiosInstance.delete(`follow/${id}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async followUserAPI(id: number) {
    try {
      const { data } = await axiosInstance.post(`follow/${id}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};

export const AuthAPI = {
  async authProfile() {
    try {
      const { data } = await axiosInstance.get(`auth/me`);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async logoutUser() {
    try {
      const res = await axiosInstance.delete(`/auth/login`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  async loginUser(
    email: string,
    password: string,
    rememberMe = false,
    captcha: string
  ) {
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
  },
  async getCaptchaImage() {
    try {
      const { data } = await axiosInstance.get("/security/get-captcha-url");
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};

export const ProfileAPI = {
  async getProfileStatus(id: string) {
    try {
      const { data } = await axiosInstance.get(`/profile/status/${id}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async updateProfileStatus(text: string) {
    try {
      const { statusText } = await axiosInstance.put(`/profile/status`, {
        status: text,
      });
      return statusText;
    } catch (e) {
      console.log(e);
    }
  },
  async saveProfilePhoto(file: File) {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const { data } = await axiosInstance.put("profile/photo", formData);
      return data.data;
    } catch (e) {
      console.log(e);
    }
  },
  async saveProfileInfo(info: ProfileUserData) {
    try {
      const { data } = await axiosInstance.put("profile", { ...info });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};
