import react from "react";
const image_url = (cover) => {
  return `https://images.igdb.com/igdb/image/upload/t_1080p_2x/${cover}.jpg`;
};
const GameCards = ({ rating, comment, gameInfo }) => {
  console.log(gameInfo);
  return (
    <div className="text-white bg-gray-600 w-[240px] flex flex-col">
      <div className="text-center h-[48px]"></div>
      {rating}
      <img
        className="w-[240px] h-[320px] mx-auto"
        src={image_url(gameInfo.cover.image_id)}
      />
      <button type="button" className={`flex-grow text-white h-[48px] `}>
        Rate and comment
      </button>
    </div>
  );
};

export default GameCards;
