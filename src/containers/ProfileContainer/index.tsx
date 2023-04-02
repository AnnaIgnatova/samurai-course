import { connect, useDispatch, useSelector } from "react-redux";
import { StateData } from "../../interfaces";
import React, { useEffect } from "react";
import {
  getStatusDataThunk,
  getUserDataThunk,
} from "../../redux/reducers/ProfileReducer";
import { Loader } from "../../components/UI/Loader";
import { useParams } from "react-router";

import { ProfileInfo } from "../../components/Profile/ProfileInfo";

const ProfileContainer: React.FC = () => {
  const { id = "27789" } = useParams();
  const profileData = useSelector(
    (state: StateData) => state.profilePage.profileData
  );
  const status = useSelector((state: StateData) => state.profilePage.status);
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
          <PostsContainer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProfileContainer;
