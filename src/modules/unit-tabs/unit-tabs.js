import React from "react";
import { UNIT, UNIT_CAPTION } from "../../constants";
import { Container, Item } from "./unit-tabs.styles";

export const UNIT_TABS = [
  {
    id: UNIT.CELSIUS,
    label: UNIT_CAPTION[UNIT.CELSIUS]
  },
  {
    id: UNIT.FARENHEIT,
    label: UNIT_CAPTION[UNIT.FARENHEIT]
  }
];

const UnitTabs = ({ selected, onSelect }) => {
  return (
    <Container>
      {UNIT_TABS.map((tab) => (
        <Item
          key={tab.id}
          data-testid={tab.id}
          className={selected === tab.id ? "selected" : ""}
          selected={selected === tab.id}
          onClick={() => onSelect(tab.id)}
        >
          {tab.label}
        </Item>
      ))}
    </Container>
  );
};

export default UnitTabs;
