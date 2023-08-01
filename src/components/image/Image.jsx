import React from "react";

const image_url = (cover) => {
  return `https://images.igdb.com/igdb/image/upload/t_1080p_2x/${cover}.jpg`;
};
const Image = ({ image_id, scaled }) => {
  return (
    <img
      className={`${
        scaled ? "md:w-[360px] md:h-[480px]" : ""
      } w-[240px] h-[320px] mx-auto`}
      src={image_url(image_id)}
    />
  );
};

export default Image;
