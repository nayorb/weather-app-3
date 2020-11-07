import React from "react";
import DurationTabs, { DURATION_TABS } from "./duration-tabs";
import { getByTestId, render } from "@testing-library/react";

describe("DurationTabs (component)", () => {
  test("renders", () => {
    const onSelectFn = jest.fn();
    render(
      <DurationTabs selected={DURATION_TABS[0].id} onSelect={onSelectFn} />
    );
    DURATION_TABS.forEach((tab) => {
      expect(getByTestId(tab.id)).toBeTruthy();
    });
  });
});
