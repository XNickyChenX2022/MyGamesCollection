import Companies from "./info formats/Companies";
import React from "react";
import FormateInfo from "./info formats/FormateInfo";

const GameInfo = ({ gameInfo }) => {
  return (
    <>
      <div className="p-1 text-center font-bold text-white text-xl">
        Game Info
      </div>
      <div
        className="font-sans scrollbar-small md:w-[360px] md:h-[480px]
    w-[240px] h-[320px] mx-auto p-1 whitespace-break-spaces overflow-y-auto overflow-x-hidden break-words text-white justify-center"
      >
        <Companies info={gameInfo.involved_companies} type="developer" />
        <Companies info={gameInfo.involved_companies} type="publisher" />
        <FormateInfo info={gameInfo} type="platforms" />
        <FormateInfo info={gameInfo} type="dlcs" />
        <FormateInfo info={gameInfo} type="expansions" />
        <FormateInfo info={gameInfo} type="remakes" />
        <FormateInfo info={gameInfo} type="remasters" last={true} />
      </div>
    </>
  );
};

export default GameInfo;
