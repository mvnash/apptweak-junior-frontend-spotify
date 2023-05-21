import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
import {
  SpotifyPlaylist,
  SpotifyTrack,
  SpotifyTrackItem,
  User,
} from "../types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authentication.accessToken;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => ({
        url: "/me",
        method: "GET",
      }),
    }),
    getPlaylists: builder.query<SpotifyPlaylist, void>({
      query: () => ({
        url: "/me/playlists",
        method: "GET",
      }),
    }),
    getPlaylistTracks: builder.query<SpotifyTrack, string>({
      query: (playlistRef) => ({
        url: `/playlists/${playlistRef}/tracks`,
        method: "GET",
      }),
    }),
    getSearchTrackResult: builder.query<SpotifyTrackItem, string>({
      query: (search) => ({
        url: `/search?q=${search}&type=track`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response.tracks.items;
      },
    }),
    addTrackToPlaylist: builder.mutation<
      void,
      { selectedPlaylistId: string; uris: string[] }
    >({
      query: ({ selectedPlaylistId, uris }) => ({
        url: `/playlists/${selectedPlaylistId}/tracks`,
        method: "POST",
        body: { uris },
      }),
    }),
    createPlaylist: builder.mutation<
      void,
      {
        userID: string;
        name: string;
        description: string;
      }
    >({
      query: ({ userID, name, description }) => ({
        url: `/users/${userID}/playlists`,
        method: "POST",
        body: { name, description },
      }),
    }),
    unfollowPlaylist: builder.mutation<void, { playlistID: string }>({
      query: (playlistRef) => ({
        url: `/playlists/${playlistRef}/followers`,
        method: "DELETE",
        //mode: 'no-cors',  -> to get opaque response
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetPlaylistsQuery,
  useGetPlaylistTracksQuery,
  useGetSearchTrackResultQuery,
  useAddTrackToPlaylistMutation,
  useCreatePlaylistMutation,
  useUnfollowPlaylistMutation,
} = apiSlice;

export default apiSlice.reducer;
