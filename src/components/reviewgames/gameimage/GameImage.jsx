import React from "react";
import GamesBackgroundContainer from "../components/GamesBackgroundContainer";
import GamesHeaderContainer from "../components/GamesHeaderContainer";
import Image from "../../image/Image";

const GameImage = ({ image_id, gameName }) => {
  return (
    <>
      <GamesBackgroundContainer>
        <GamesHeaderContainer title={gameName} />
        <Image image_id={image_id} scaled={true} />
      </GamesBackgroundContainer>
    </>
  );
};

export default GameImage;
