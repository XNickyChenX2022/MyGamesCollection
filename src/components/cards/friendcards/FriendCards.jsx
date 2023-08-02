import React, { useState } from "react";
import Image from "../../image/Image";
import CardContainer from "../components/CardContainer";
import ToggleButton from "../components/ToggleButton";
import RatingContainer from "../components/RatingContainer";
import CardInfoDisplayContainer from "../components/CardInfoDisplayContainer";
import CardInfo from "../components/CardInfo";
const FriendCards = ({ rating, review, gameInfo, children, center }) => {
  const [mode, setMode] = useState("image");
  const toggleMode = (e, mode) => {
    e.preventDefault();
    setMode(mode);
  };
  return (
    <CardContainer name={gameInfo.name}>
      {mode === "image" ? (
        <>
          <Image image_id={gameInfo.cover.image_id} />
          <RatingContainer rating={rating} />
          <ToggleButton
            onClick={toggleMode}
            state={"gamedata"}
            text="View Game Data"
            className={`bg-orange-400 ${center ? "" : "rounded-b-md"}`}
          />
        </>
      ) : mode === "gamedata" ? (
        <>
          <CardInfo gameInfo={gameInfo} />
          <RatingContainer rating={rating} />
          <ToggleButton
            onClick={toggleMode}
            state={"review"}
            text="View Review"
            className={`bg-green-500  ${center ? "" : "rounded-b-md"}`}
          />
        </>
      ) : (
        mode === "review" && (
          <>
            <CardInfoDisplayContainer>
              <p className="font-bold">Review:</p>
              {review}
            </CardInfoDisplayContainer>
            <RatingContainer rating={rating} />
            <ToggleButton
              onClick={toggleMode}
              state={"image"}
              text="View Image"
              className={`bg-red-500  ${center ? "" : "rounded-b-md"}`}
            />
          </>
        )
      )}
      {children}
    </CardContainer>
  );
};
export default FriendCards;
