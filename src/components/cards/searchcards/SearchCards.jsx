import React, { useState } from "react";
import Image from "../../image/Image";
import CardContainer from "../components/CardContainer";
import ToggleButton from "../components/toggleButton";
import AddButton from "./components/AddButton";
import CardInfo from "../components/CardInfo";
const SearchCards = ({ _id, cover, name, added, gameInfo }) => {
  const [mode, setMode] = useState("image");
  const toggleMode = (e, mode) => {
    e.preventDefault();
    setMode(mode);
  };
  return (
    <CardContainer name={name}>
      {mode === "image" ? (
        <>
          <Image image_id={cover} />
          <ToggleButton
            onClick={toggleMode}
            state={"gamedata"}
            text="View Game Data"
            className="bg-orange-400"
          />
        </>
      ) : (
        mode === "gamedata" && (
          <>
            <CardInfo gameInfo={gameInfo} />
            <ToggleButton
              onClick={toggleMode}
              state={"image"}
              text="View Image"
              className="bg-yellow-400"
            />
          </>
        )
      )}
      <AddButton added={added} _id={_id} />
    </CardContainer>
  );
};
export default SearchCards;
