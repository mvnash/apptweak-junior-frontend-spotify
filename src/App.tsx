import "./App.css";

import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import { authSelectors } from "./containers/auth/selectors";
import { useGetUserQuery } from "./api/apiSlice";
import PlaylistPage from "./components/PlaylistPage";

const App: FC = (): ReactElement => {
  const accessToken = useSelector(authSelectors.getAccessToken);

  // TODO: You can access user data and now fetch user's playlists
  const { data: user } = useGetUserQuery(undefined, {
    skip: !accessToken,
  });
  console.log(user);

  return (
    <div className="App">
      <PlaylistPage/>
    </div>
  );
};

export default App;
