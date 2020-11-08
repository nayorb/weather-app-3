import React from "react";
import UnitTabs, { UNIT_TABS } from "./unit-tabs";
import { fireEvent, render } from "@testing-library/react";

describe("UnitTabs (component)", () => {
  test("renders", () => {
    const onSelectFn = jest.fn();
    const container = render(
      <UnitTabs selected={UNIT_TABS[0].id} onSelect={onSelectFn} />
    );
    UNIT_TABS.forEach((tab) => {
      expect(container.getByTestId(tab.id).textContent).toEqual(tab.label);
    });
  });
  test("renders default selected item correctly", () => {
    const onSelectFn = jest.fn();
    const container = render(
      <UnitTabs selected={UNIT_TABS[0].id} onSelect={onSelectFn} />
    );
    const selectedTab = container.getByTestId(UNIT_TABS[0].id);
    expect(selectedTab.classList.contains("selected"));
  });
  test("change selected item after click", () => {
    const onSelectFn = jest.fn();
    const container = render(
      <UnitTabs selected={UNIT_TABS[1].id} onSelect={onSelectFn} />
    );
    const targetTab = container.getByTestId(UNIT_TABS[1].id);
    const selectedTab = container.getByTestId(UNIT_TABS[0].id);
    expect(targetTab).toHaveClass("selected");
    expect(selectedTab).not.toHaveClass("selected");
    fireEvent.click(targetTab);
    expect(onSelectFn).toHaveBeenCalled();
  });
});
