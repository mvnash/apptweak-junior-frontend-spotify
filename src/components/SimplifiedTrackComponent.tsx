import React from "react";
import { SimplifiedTrack } from "../types";

const SimplifiedTrackComponent: React.FC<SimplifiedTrack> = ({
  album,
  name,
}) => {
  return (
    <div className="searchTrackContainer">
      <div className="searchCoverDiv">
        <img className="coverAlbum" src={album.images[0].url} alt="Cover" />
      </div>
      <div>
        <p className="titleTrack">{name}</p>
      </div>
    </div>
  );
};

export default SimplifiedTrackComponent;
