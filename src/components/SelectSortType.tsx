import React from "react";
import { SpotifyPlaylist } from "../types";

interface SelectPlaylistMenuProps {
  selectedSortType: string | null;
  setSelectedSortType: (sortType: string) => void;
}

const SelectPlaylistMenu: React.FC<SelectPlaylistMenuProps> = ({
  selectedSortType,
  setSelectedSortType,
}) => {
  const types = ["Name", "Duration"];
  return (
    <div className="dropdownContainer">
      <label className="dropdownLabel" htmlFor="dropdownMenu">
        Select Sort:
      </label>
      <select
        id="dropdownMenu"
        className="dropdownMenu"
        value={selectedSortType ?? "Release Date"}
        onChange={(e) => setSelectedSortType(e.target.value)}
      >
        <option value="">Release Date</option>
        {types?.map((sortType) => (
          <option key={sortType} value={sortType}>
            {sortType}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPlaylistMenu;
