import React, { createContext, useCallback, useEffect, useState } from "react";
import Dashboard from "./modules/dashboard/dashboard";
import Summary from "./modules/summary/summary";
import { DURATION_TABS } from "./modules/duration-tabs/duration-tabs";
import { UNIT_TABS } from "./modules/unit-tabs/unit-tabs";
import "./normalize.css";
import "./styles.css";
import WeatherService from "./services/weather.service";
import { Container } from "./App.styles";

export const AppContext = createContext();

export default function App() {
  const [state, setState] = useState({
    selectedDurationTab: DURATION_TABS[0].id,
    selectedUnit: UNIT_TABS[0].id
  });
  const [location, setLocation] = useState();
  const [summaryData, setSummaryData] = useState();

  useEffect(() => {
    WeatherService.getCurrentData(location)
      .then((data) => {
        setSummaryData(data);
      })
      .catch((err) => console.warn(err));
  }, [location]);

  const selectDurationTab = (id) => {
    setState({
      ...state,
      selectedDurationTab: id
    });
  };
  const selectUnit = (id) => {
    setState({
      ...state,
      selectedUnit: id
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        summaryData,
        selectDurationTab,
        selectUnit,
        changeLocation: setLocation
      }}
    >
      <Container>
        <Summary />
        <Dashboard />
      </Container>
    </AppContext.Provider>
  );
}
