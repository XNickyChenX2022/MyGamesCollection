import react from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GameCardContainer from "../friendcards/FriendCards";
const GameCards = ({ _id, rating, gameInfo, review }) => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <GameCardContainer
      rating={rating}
      review={review}
      gameInfo={gameInfo}
      center={true}
    >
      <Link
        preventScrollReset
        to={`${userInfo.username}/${_id}`}
        className="flex-grow text-blue-800 h-[48px] bg-yellow-500 flex items-center justify-center rounded-b-md font-semibold"
      >
        Make Review
      </Link>
    </GameCardContainer>
  );
};

export default GameCards;
