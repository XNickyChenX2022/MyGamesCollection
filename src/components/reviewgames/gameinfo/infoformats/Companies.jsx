import React from "react";
import InfoContainer from "../components/InfoContainer";
import { capitalize, formatCompanies } from "../../../../utils/Utils";
const Companies = ({ info, type }) => {
  return (
    <InfoContainer>
      {capitalize(type)}
      {": "}
      {info.length !== 0 ? formatCompanies(info, type) : "None"}
    </InfoContainer>
  );
};

export default Companies;
