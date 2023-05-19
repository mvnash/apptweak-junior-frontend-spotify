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
  return (
    <div className="trackContainer">
      <img
        className="coverAlbum"
        src={album.images[0].url}
        alt="Cover"
      />
      <div className="titleArtistContainer">
        <p className="titleTrack">{name}</p>
        <ul>
          {artists.map((artist, index) => (
            <li key={index}>{artist.name}</li>
          ))}
        </ul>
      </div>
      <p className="albumName">{album.name}</p>
      <p className="albumReleaseDate">{album.release_date}</p>
    </div>
  );
};

export default TrackItemComponent;
