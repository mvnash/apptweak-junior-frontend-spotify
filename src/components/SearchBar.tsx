import React, { useEffect, useRef, useState } from "react";
import { useGetSearchTrackResultQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";
import { authSelectors } from "../containers/auth/selectors";
import TrackItemComponent from "./TrackItemComponent";
import SimplifiedTrackComponent from "./SimplifiedTrackComponent";

const SearchBar: React.FC = () => {
  const accessToken = useSelector(authSelectors.getAccessToken);
  const [query, setQuery] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const { data: searchTracks } = useGetSearchTrackResultQuery(query, {
    skip: !accessToken || !query,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setQuery("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="searchBarContainer">
        <input
          id="searchInput"
          type="text"
          placeholder="Search for a track"
          value={query}
          onChange={handleChange}
        />
        <button id="searchButton" type="submit">
          Search
        </button>

        <div className="searchMenuResult">
          {searchTracks && Array.isArray(searchTracks) && query !== "" && (
            <ul className="searchResult">
              {searchTracks.map((track) => (
                <li key={track.id}>
                  <SimplifiedTrackComponent
                    key={track.id}
                    album={track.album}
                    name={track.name}
                    uri={track.uri}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
