import React from "react";
import { useCreatePlaylistMutation } from "../api/apiSlice";

interface CreatePlaylistButtonProps {
  userID: string;
}

const CreatePlaylistButton: React.FC<CreatePlaylistButtonProps> = ({
  userID,
}) => {
  const [createPlaylist] = useCreatePlaylistMutation();

  const handleOnClickCreateButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    createPlaylist({ userID, name: "My New Playlist", description: "" });
    window.location.reload();
  };

  return (
    <button className="addPlaylistButton" onClick={handleOnClickCreateButton}>
      Add new playlist
    </button>
  );
};

export default CreatePlaylistButton;
