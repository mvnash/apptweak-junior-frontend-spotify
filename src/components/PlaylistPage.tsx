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
import DropdownMenu from "./DropDownMenu";
import SearchBar from "./SearchBar";

const PlaylistPage: FC = (): ReactElement => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(
    null
  );
  const accessToken = useSelector(authSelectors.getAccessToken);

  const { data: user } = useGetUserQuery(undefined, {
    skip: !accessToken,
  });
  console.log(user);
  

  const { data: playlists } = useGetPlaylistsQuery(undefined, {
    skip: !accessToken,
  });

  const { data: playlistTracks } = useGetPlaylistTracksQuery(
    "playlists/" + selectedPlaylistId + "/tracks",
    {
      skip: !accessToken || !selectedPlaylistId,
    }
  );

  return (
    <div className="PlaylistPage">
      <div className="topContainer">
        <SearchBar/>
      </div>
      <div className="selectionPlaylistContainer">
      <DropdownMenu
          selectedPlaylistId={selectedPlaylistId}
          playlists={playlists}
          setSelectedPlaylistId={setSelectedPlaylistId}
        />
        <h2 id="labelSelectionPlaylist">Selected Playlist description</h2>
      </div>

      {playlistTracks?.items.map((item) => {
        const track = item.track;
        if (track.type === "track") {
          const typedTrack: SpotifyTrackItem = track as SpotifyTrackItem;
          return <TrackItemComponent key={track.id} {...typedTrack} />;
        } else {
          const typedTrack: EpisodeObject = track as EpisodeObject;
          return <EpisodeComponent key={track.id} {...typedTrack} />;
        }
      })}
    </div>
  );
};

export default PlaylistPage;
