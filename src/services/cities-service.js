import cities from "../data/cities";

const getCities = ({ limit = 10, query }) => {
  if (!query) {
    return [];
  }
  const filteredCitites = cities.filter((city) => city.startsWith(query));
  return filteredCitites;
};

const CititesService = {
  getCities
};

export default CititesService;
