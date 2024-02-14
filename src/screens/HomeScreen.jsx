import React from "react";
import usePrefetchFriendRequests from "../hooks/usePrefetchFriendRequests";
import usePrefetchGames from "../hooks/usePrefetchGames";
import usePrefetchFriends from "../hooks/usePrefetchFriends";

const HomeScreen = () => {
  // usePrefetchFriendRequests();
  // usePrefetchGames();
  // usePrefetchFriends();
  return (
    <div className="flex flex-1 flex-grow justify-center items-center">
      <div className="md:w-[400px] w-screen h-[600px] bg-gray-600 py-3 px-10">
        <div className="text-white text-2xl flex justify-center ">
          Instructions
        </div>{" "}
        <div className="text-white">
          Welcome to MGC{` (My Games Collection)`}. MGC provides the ability to
          have a place to rate and review your favorite games and simultaneously
          see what your friends are thinking about their favorite games. To get
          started, click the dropdown menu right next to your username.
          <ul>
            <li>
              <p className="font-bold">Search</p> - Search for games that you
              would like to add or remove from your collection
            </li>
            <li>
              {" "}
              <p className="font-bold">My Games</p> - Your collection of games
              that you would review and rate
            </li>
            <li>
              <p className="font-bold">Friends</p> - Send friend requests to
              your friends so that you can view their review for their games
            </li>
            <li>
              <p className="font-bold">My Profile</p> - edit username, email, or
              password
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
