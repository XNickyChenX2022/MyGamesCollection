import react from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "../../image/Image";
import RatingContainer from "../components/RatingContainer";
import CardContainer from "../components/CardContainer";
import GameCardContainer from "../friendcards/FriendCards";
const GameCards = ({ _id, rating, gameInfo }) => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <GameCardContainer
      rating={rating}
      review={gameInfo.review}
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
