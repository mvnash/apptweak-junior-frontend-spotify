import { FC, ReactElement, useState } from "react";
import { useSelector } from "react-redux";

import {
  useGetPlaylistTracksQuery,
  useGetPlaylistsQuery,
  useGetUserQuery,
} from "../api/apiSlice";
import { authSelectors } from "../containers/auth/selectors";
import TrackItemComponent from "./TrackItemComponent";
import { EpisodeObject, SpotifyTrackItem } from "../types";
import EpisodeComponent from "./EpisodeComponent";
import DropdownMenu from "./SelectPlaylistMenu";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import CreatePlaylistButton from "./CreatePlaylistButton";
import UnfollowPlaylistButton from "./UnfollowPlaylistButton";
import SelectSortType from "./SelectSortType";

const PlaylistPage: FC = (): ReactElement => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string>("");
  const [selectedSortType, setSelectedSortType] = useState<string>("");
  const accessToken = useSelector(authSelectors.getAccessToken);

  const { data: user } = useGetUserQuery(undefined, {
    skip: !accessToken,
  });
  console.log(user);

  const { data: playlists } = useGetPlaylistsQuery(undefined, {
    skip: !accessToken,
  });

  const { data: playlistTracks } = useGetPlaylistTracksQuery(
    selectedPlaylistId,
    {
      skip: !accessToken || !selectedPlaylistId,
    }
  );

  // To sort playlistTracks.items with the selectedSortType state. By default it's sorted by release date.
  const sortedItems =
    selectedSortType && playlistTracks && playlistTracks.items.length > 0
      ? [...playlistTracks.items].sort((a, b) => {
          switch (selectedSortType) {
            case "Name":
              return a.track.name.localeCompare(b.track.name);
            case "Duration":
              return a.track.duration_ms - b.track.duration_ms;
            default:
              return 0;
          }
        })
      : playlistTracks?.items;

  return (
    <div className="PlaylistPage">
      <div className="topContainer">
        <div className="searchBarContainer">
          <SearchBar selectedPlaylistId={selectedPlaylistId} />
        </div>
        <div className="userProfileContainer">
          <UserProfile user={user} />
        </div>
      </div>
      <div className="secondTopContainer">
        <SelectSortType
          selectedSortType={selectedSortType}
          setSelectedSortType={setSelectedSortType}
        />
        <DropdownMenu
          selectedPlaylistId={selectedPlaylistId}
          playlists={playlists}
          setSelectedPlaylistId={setSelectedPlaylistId}
        />
        <div className="buttonContainer">
          <UnfollowPlaylistButton playlistID={selectedPlaylistId} />
          <CreatePlaylistButton userID={user?.id ?? ""} />
        </div>
      </div>

      {sortedItems && sortedItems.length > 0 ? (
        sortedItems?.map((item) => {
          const track = item.track;
          if (track.type === "track") {
            const typedTrack: SpotifyTrackItem = track as SpotifyTrackItem;
            return <TrackItemComponent key={track.id} {...typedTrack} />;
          } else {
            const typedTrack: EpisodeObject = track as EpisodeObject;
            return <EpisodeComponent key={track.id} {...typedTrack} />;
          }
        })
      ) : (
        <h1 className="noTracksErrorMessage">Nothing here..</h1>
      )}
    </div>
  );
};

export default PlaylistPage;
