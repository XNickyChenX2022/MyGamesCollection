import react, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "../Image";

const GameCards = ({ _id, rating, review, gameInfo }) => {
  // const [mode, setMode] = useEffect("game");
  const { userInfo } = useSelector((state) => state.auth);
  return (
    // <div className="flex flex-1 md:5px">
    <div className="text-white bg-[#121212] w-[244px] flex flex-col border-[3px] border-[#121212] outline-none">
      <div className="text-center h-[48px] overflow-hidden rounded-t-md bg-gray-600">
        {gameInfo.name}
      </div>
      <Image image_id={gameInfo.cover.image_id} />
      <div className="p-1 bg-gray-600"> rating: {rating ? rating : "None"}</div>
      <Link
        to={`/games/${userInfo.username}/${_id}`}
        className="flex-grow text-blue-800 h-[48px] bg-orange-400 flex items-center justify-center rounded-b-md font-semibold"
      >
        Make Review
      </Link>
    </div>
    // </div>
  );
};

export default GameCards;
