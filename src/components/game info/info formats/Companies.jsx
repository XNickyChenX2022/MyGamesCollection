import React from "react";
import InfoContainer from "../components/InfoContainer";
import { capitalize, formatCompanies } from "../utils/Utils";
const Companies = ({ info, type }) => {
  return (
    <InfoContainer>
      {capitalize(type)}
      {": "}
      {formatCompanies(info, type)}
    </InfoContainer>
  );
};

export default Companies;
