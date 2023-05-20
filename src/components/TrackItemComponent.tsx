import React from "react";
import { SpotifyTrackItem } from "../types";

const TrackItemComponent: React.FC<SpotifyTrackItem> = ({
  album,
  artists,
  available_markets,
  disc_number,
  duration_ms,
  explicit,
  external_ids,
  external_urls,
  href,
  id,
  is_playable,
  linked_from,
  restrictions,
  name,
  popularity,
  preview_url,
  track_number,
  type,
  uri,
  is_local,
}) => {
    const formatDuration = (duration:number) => {
      const minutes = Math.floor(duration / 60000);
      const seconds = ((duration % 60000) / 1000).toFixed(0);
  
      return `${minutes}:${seconds.padStart(2, "0")}`;
    };
  
    const formattedDuration = formatDuration(duration_ms);

  return (
    <div className="trackContainer">
      <div className="coverDivContainer">
        <img className="coverAlbum" src={album.images[0].url} alt="Cover" />
      </div>
      <div className="titleArtistContainer">
        <p className="titleTrack">{name}</p>
        <ul>
          {artists.map((artist, index) => (
            <li key={index}>{artist.name}</li>
          ))}
        </ul>
      </div>
      <div className="albumNameContainer">
        <p className="albumName">{album.name}</p>
      </div>
      <div className="releaseDateContainer">
        <p className="albumReleaseDate">{album.release_date}</p>
      </div>
      <div className="durationContainer">
        <p className="duration">{formattedDuration}</p>
      </div>
    </div>
  );
};

export default TrackItemComponent;
