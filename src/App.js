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
    selectedUnit: UNIT_TABS[0].id,
    summaryData: null
  });

  const onLocationChange = useCallback(
    (location) => {
      WeatherService.getCurrentData(location)
        .then((data) => {
          setState({
            ...state,
            summaryData: data
          });
        })
        .catch((err) => console.warn(err));
    },
    [state]
  );

  useEffect(() => {
    onLocationChange("Bratislava");
  }, [onLocationChange]);

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
        selectDurationTab,
        selectUnit,
        changeLocation: onLocationChange
      }}
    >
      <Container>
        <Summary />
        <Dashboard />
      </Container>
    </AppContext.Provider>
  );
}
