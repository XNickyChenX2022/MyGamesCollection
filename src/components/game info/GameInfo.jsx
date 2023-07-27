import Companies from "./info formats/Companies";
import React from "react";
import FormateInfo from "./info formats/FormateInfo";

const GameInfo = ({ gameInfo }) => {
  return (
    <>
      <Companies info={gameInfo.involved_companies} type="developer" />
      <Companies info={gameInfo.involved_companies} type="publisher" />
      <FormateInfo info={gameInfo} type="platforms" />
      <FormateInfo info={gameInfo} type="dlcs" />
      <FormateInfo info={gameInfo} type="expansions" />
      <FormateInfo info={gameInfo} type="remakes" />
      <FormateInfo info={gameInfo} type="remasters" last={true} />
    </>
  );
};

export default GameInfo;
