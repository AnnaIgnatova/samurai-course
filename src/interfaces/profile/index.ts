export interface ProfileUserData {
  userId?: string;
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  contacts: {
    github: string | null;
    vk: string | null;
    instagram: string | null;
    youtube: string | null;
  };
  photos?: {
    small: string | null;
    large: string | null;
  };
  aboutMe: string | null;
}
