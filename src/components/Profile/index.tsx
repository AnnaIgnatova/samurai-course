import { useDispatch, useSelector } from "react-redux";
import { StateData } from "../../interfaces";
import React, { useEffect } from "react";
import {
  getStatusDataThunk,
  getUserDataThunk,
} from "../../redux/reducers/ProfileReducer";
import { Loader } from "../../components/UI/Loader";
import { useParams } from "react-router";
import { ProfileInfo } from "../../components/Profile/ProfileInfo";
import { Posts } from "../../components/Profile/Posts";

const Profile: React.FC = () => {
  const { id = "27789" } = useParams();
  const profileData = useSelector(
    (state: StateData) => state.profilePage.profileData
  );
  const status = useSelector((state: StateData) => state.profilePage.status);
  const posts = useSelector((state: StateData) => state.profilePage.posts);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getUserDataThunk(id));
    dispatch(getStatusDataThunk(id));
  }, [id]);

  return (
    <>
      {profileData ? (
        <>
          <ProfileInfo
            ownProfile={id === "27789"}
            profileData={profileData}
            status={status}
          />
          {/* <Posts profileData={profileData} posts={posts} /> */}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Profile;
