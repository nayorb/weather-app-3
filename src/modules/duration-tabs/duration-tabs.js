import React from "react";
import { Container, Item } from "./duration-tabs.styles";

export const DURATION_TABS = [
  {
    id: "WEEK_DURATION_TAB",
    label: "Week"
  },
  {
    id: "TODAY_DURATION_TAB",
    label: "Today"
  }
];

const DurationTabs = ({ selected, onSelect }) => {
  return (
    <Container>
      {DURATION_TABS.map((tab) => (
        <Item
          data-testid={tab.id}
          key={tab.id}
          selected={selected === tab.id}
          onClick={() => onSelect(tab.id)}
        >
          {tab.label}
        </Item>
      ))}
    </Container>
  );
};

export default DurationTabs;
