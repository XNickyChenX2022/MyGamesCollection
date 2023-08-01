import React from "react";
import InfoContainer from "../components/InfoContainer";
import { formatInfo, capitalize } from "../../../../utils/Utils";
const FormateInfo = ({ info, type, last }) => {
  return (
    <InfoContainer last={last}>
      {capitalize(type)}
      {": "}
      {info[type].length !== 0 ? formatInfo(info[type], type) : "None"}
    </InfoContainer>
  );
};

export default FormateInfo;
