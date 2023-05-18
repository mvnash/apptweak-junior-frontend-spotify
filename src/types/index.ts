interface ImagesObjects {
  url: string;
  height?: number;
  width?: number;
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
  genres: Array<String>;
  href: string;
  id: string;
  images: Array<ImagesObjects>;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface EpisodeObject {
    audio_preview_url:string;
    description:string;
    html_description:string;
    duration_ms:number;
    explicit:boolean;
    external_urls:object;
    href:string;
    id:string;
    images:Array<ImagesObjects>;
    is_externally_hosted:boolean;
    is_playable:boolean;
    languages:Array<String>;
    name:string;
    release_date:string;
    release_date_precision:string;
    resume_point:object;
    type:string;
    uri:string;
    restrictions?:object;
    show:object;
  }

interface PlaylistTrackObject {
    added_at:string;
    added_by:object;
    is_local:boolean;
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
  images: Array<ImagesObjects>;
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
  items: Array<SimplifiedPlaylistObjects>;
}

export interface SpotifyTrack {
  href: string;
  limit: number;
  next?:string;
  offset:number;
  previous?:string;
  total:number;
  items: Array<PlaylistTrackObject>;
}

export interface SpotifyTrackItem {
  album: object;
  artists: Array<ArtistObject>;
  available_markets: Array<string>;
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
