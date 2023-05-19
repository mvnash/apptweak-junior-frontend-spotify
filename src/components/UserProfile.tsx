import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import { useGetUserQuery } from "../api/apiSlice";
import { authSelectors } from "../containers/auth/selectors";

const UserProfile: FC = (): ReactElement => {
  const accessToken = useSelector(authSelectors.getAccessToken);

  const { data: user } = useGetUserQuery(undefined, {
    skip: !accessToken,
  });
  console.log(user);

  return (
    <div className="UserProfile">
      <img
        id="idProfilePicture"
        src={user?.images[0].url}
        alt="profilePicture"
      />
      <p>{user ? user.display_name : "Guest"}</p>
    </div>
  );
};

export default UserProfile;
