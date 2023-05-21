import { User } from "../types";

interface UserProfileProps {
  user: User | undefined;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="UserProfile">
      <img
        id="idProfilePicture"
        src={user?.images[0]?.url}
        alt="profilePicture"
      />
      <p>{user ? user.display_name : "Guest"}</p>
    </div>
  );
};

export default UserProfile;
