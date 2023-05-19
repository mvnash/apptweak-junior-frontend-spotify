import React from "react";
import { EpisodeObject } from "../types";

const EpisodeComponent: React.FC<EpisodeObject> = ({
  audio_preview_url,
  description,
  html_description,
  duration_ms,
  explicit,
  external_urls,
  href,
  id,
  images,
  is_externally_hosted,
  is_playable,
  languages,
  name,
  release_date,
  release_date_precision,
  resume_point,
  type,
  uri,
  restrictions,
  show,
}) => {
  return (
    <div>
      <img className="coverAlbum" src={images[0].url} alt="Cover" />
      <p>{name}</p>
      <p>{description ?? ""}</p>
      <p>{release_date}</p>
    </div>
  );
};

export default EpisodeComponent;
