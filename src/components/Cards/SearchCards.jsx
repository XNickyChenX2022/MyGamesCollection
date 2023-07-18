import React from "react";

const image_url = (cover) => {
  return `https://images.igdb.com/igdb/image/upload/t_1080p_2x/${cover}.jpg`;
};

const SearchCards = ({ cover, name }) => {
  return (
    <div className="text-white rounded bg-gray-600 w-[240px]">
      <div className="text-center">{name}</div>
      <img className="w-[240px] h-[320px] mx-auto" src={image_url(cover)} />
      <div></div>
    </div>
  );
};
// w-[512px] h-[683px]
// w-[607px] h-[342px] bg-cover
export default SearchCards;
