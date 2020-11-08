import { useContext } from "react";

import { AppContext } from "../App";

const useWeatherData = () => {
  const { summaryData } = useContext(AppContext);

  if (!summaryData) return { loadingWeatherData: true };

  return summaryData;
};

export default useWeatherData;
