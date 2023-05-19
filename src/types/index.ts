interface ImagesObjects {
  url: string;
  height?: number;
  width?: number;
}

interface AlbumObject {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: object;
  href: string;
  id: string;
  images: ImagesObjects[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: object;
  type: string;
  uri: string;
  copyrights: object[];
  external_ids: object;
  genres: string[];
  label: string;
  popularity: number;
  artists: ArtistObject[];
  tracks: object;
}

interface SimplifiedPlaylistObjects {
  collaborative: boolean;
  description?: string;
  external_urls: object;
  href: string;
  id: string;
  images: ImagesObjects;
  name: string;
  owner: object;
  public: boolean;
  snapshot_id: string;
  tracks: object;
  type: string;
  uri: string;
}

interface ArtistObject {
  external_urls: object;
  followers: object;
  genres: string[];
  href: string;
  id: string;
  images: ImagesObjects[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface EpisodeObject {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: object;
  href: string;
  id: string;
  images: ImagesObjects[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point: object;
  type: string;
  uri: string;
  restrictions?: object;
  show: object;
}

interface PlaylistTrackObject {
  added_at: string;
  added_by: object;
  is_local: boolean;
  track: SpotifyTrackItem | EpisodeObject;
}

export interface User {
  country: string;
  display_name: string;
  email: string;
  explicit_content: object;
  external_urls: object;
  followers: object;
  href: string;
  id: string;
  images: ImagesObjects[];
  product: string;
  type: string;
  uri: string;
}

export interface SpotifyPlaylist {
  href: string;
  limit: number;
  next?: string;
  offset: number;
  previous?: string;
  total: number;
  items: SimplifiedPlaylistObjects[];
}

export interface SpotifyTrack {
  href: string;
  limit: number;
  next?: string;
  offset: number;
  previous?: string;
  total: number;
  items: PlaylistTrackObject[];
}

export interface SpotifyTrackItem {
  album: AlbumObject;
  artists: ArtistObject[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: object;
  external_urls: object;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: object;
  restrictions: object;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
