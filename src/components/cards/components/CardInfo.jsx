import React from "react";
import CardInfoDisplayContainer from "./CardInfoDisplayContainer";
import Companies from "../../reviewgames/gameinfo/infoformats/Companies";
import FormateInfo from "../../reviewgames/gameinfo/infoformats/FormateInfo";
const CardInfo = ({ gameInfo }) => {
  return (
    <CardInfoDisplayContainer>
      <Companies info={gameInfo.involved_companies} type="developer" />
      <Companies info={gameInfo.involved_companies} type="publisher" />
      <FormateInfo info={gameInfo} type="platforms" />
      <FormateInfo info={gameInfo} type="dlcs" />
      <FormateInfo info={gameInfo} type="expansions" />
      <FormateInfo info={gameInfo} type="remakes" />
      <FormateInfo info={gameInfo} type="remasters" />
    </CardInfoDisplayContainer>
  );
};

export default CardInfo;
