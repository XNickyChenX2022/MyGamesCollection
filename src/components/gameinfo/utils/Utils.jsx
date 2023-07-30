const formatInfo = (info) => {
  const convertedInfo = info.map((i) => i.name);
  return convertedInfo.join(", ");
};
const formatCompanies = (involved_companies, type) => {
  const companies = involved_companies
    .filter((company) => company[type] === true)
    .map((company) => company.company.name);
  if (companies.length === 0) {
    return null;
  }
  return companies.join(", ");
};
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export { formatInfo, formatCompanies, capitalize };
