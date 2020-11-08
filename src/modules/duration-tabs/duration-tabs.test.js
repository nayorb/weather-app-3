import React from "react";
import DurationTabs, { DURATION_TABS } from "./duration-tabs";
import { fireEvent, render } from "@testing-library/react";

describe("DurationTabs (component)", () => {
  test("renders", () => {
    const onSelectFn = jest.fn();
    const container = render(
      <DurationTabs selected={DURATION_TABS[0].id} onSelect={onSelectFn} />
    );
    DURATION_TABS.forEach((tab) => {
      expect(container.getByTestId(tab.id).textContent).toEqual(tab.label);
    });
  });
  test("renders default selected item correctly", () => {
    const onSelectFn = jest.fn();
    const container = render(
      <DurationTabs selected={DURATION_TABS[0].id} onSelect={onSelectFn} />
    );
    const selectedTab = container.getByTestId(DURATION_TABS[0].id);
    expect(selectedTab.classList.contains("selected"));
  });
  test("change selected item after click", () => {
    const onSelectFn = jest.fn();
    const container = render(
      <DurationTabs selected={DURATION_TABS[1].id} onSelect={onSelectFn} />
    );
    const targetTab = container.getByTestId(DURATION_TABS[1].id);
    const selectedTab = container.getByTestId(DURATION_TABS[0].id);
    expect(targetTab).toHaveClass("selected");
    expect(selectedTab).not.toHaveClass("selected");
    fireEvent.click(targetTab);
    expect(onSelectFn).toHaveBeenCalled();
  });
});
