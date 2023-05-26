import React from "react";
import { useCreatePlaylistMutation } from "../api/apiSlice";
import { wait } from "@testing-library/user-event/dist/utils";

interface CreatePlaylistButtonProps {
  userID: string;
}

const CreatePlaylistButton: React.FC<CreatePlaylistButtonProps> = ({
  userID,
}) => {
  const [createPlaylist] = useCreatePlaylistMutation();

  const handleOnClickCreateButton = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    await createPlaylist({ userID, name: "My New Playlist", description: "" });
    window.location.reload();
  };

  return (
    <button className="addPlaylistButton" onClick={handleOnClickCreateButton}>
      Add new playlist
    </button>
  );
};

export default CreatePlaylistButton;
