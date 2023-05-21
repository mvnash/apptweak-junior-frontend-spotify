import { User } from "../types";

interface UserProfileProps {
  user: User | undefined;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="UserProfile">
      {user?.images[0] ? (
        <img
          id="idProfilePicture"
          src={user?.images[0]?.url}
          alt="profilePicture"
        />
      ) : (
        <img
          id="idProfilePicture"
          src="Default_pfp.svg"
          alt="default profile"
        />
      )}
      <p>{user ? user.display_name : "Guest"}</p>
    </div>
  );
};

export default UserProfile;
