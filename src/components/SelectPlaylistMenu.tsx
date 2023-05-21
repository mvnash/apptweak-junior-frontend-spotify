import React from "react";
import { SpotifyPlaylist } from "../types";

interface SelectPlaylistMenuProps {
  selectedPlaylistId: string | null;
  playlists: SpotifyPlaylist | undefined;
  setSelectedPlaylistId: (playlistId: string) => void;
}

const SelectPlaylistMenu: React.FC<SelectPlaylistMenuProps> = ({
  selectedPlaylistId,
  playlists,
  setSelectedPlaylistId,
}) => {
  return (
    <div className="dropdownContainer">
      <label className="dropdownLabel" htmlFor="dropdownMenu">
        Select Playlist:
      </label>
      <select
        id="dropdownMenu"
        className="dropdownMenu"
        value={selectedPlaylistId ?? "Select Playlist"}
        onChange={(e) => setSelectedPlaylistId(e.target.value)}
      >
        <option value="">Select Playlist</option>
        {playlists?.items.map((playlist) => (
          <option key={playlist.id} value={playlist.id}>
            {playlist.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPlaylistMenu;
