import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import useAddFollow from "../hooks/useAddFollow";

const UserCard = ({ user, flag }) => {
  const [isFollowing, setIsFollowing] = useState(flag);
  const followUser = useAddFollow();

  

  const handleFollow = () => {
    followUser(user._id);
    setIsFollowing((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between my-3 bg-white rounded-lg shadow-md p-4">
      <Link to={`/profile/${user._id}`} className="flex">
        <div>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
            size="40"
          />
        </div>
        <div className="ml-2">
          <h1 className="font-bold">{user?.fullname}</h1>
          <p className="text-sm">@{user?.username}</p>
        </div>
      </Link>
      <div>
        <button
          onClick={handleFollow}
          className={`px-4 py-1 rounded-full ${
            isFollowing ? "bg-gray-300 text-black" : "bg-black text-white"
          }`}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
