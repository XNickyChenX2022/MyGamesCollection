import Companies from "./infoformats/Companies";
import React from "react";
import FormateInfo from "./infoformats/FormateInfo";
import GamesHeaderContainer from "../components/GamesHeaderContainer";
const GameInfo = ({ gameInfo }) => {
  return (
    <>
      <div className="bg-gray-600 px-5 pt-2 pb-5 w-[280px] md:w-[400px]">
        <GamesHeaderContainer title="GameInfo" />
        <div className="font-sans scrollbar-small md:w-[360px] md:h-[480px] w-[240px] h-[320px] mx-auto p-1 whitespace-break-spaces overflow-y-auto overflow-x-hidden break-words text-white justify-center">
          <Companies info={gameInfo.involved_companies} type="developer" />
          <Companies info={gameInfo.involved_companies} type="publisher" />
          <FormateInfo info={gameInfo} type="genres" />
          <FormateInfo info={gameInfo} type="platforms" />
          <FormateInfo info={gameInfo} type="dlcs" />
          <FormateInfo info={gameInfo} type="expansions" />
          <FormateInfo info={gameInfo} type="remakes" />
          <FormateInfo info={gameInfo} type="remasters" last={true} />
        </div>
      </div>
    </>
  );
};

export default GameInfo;
