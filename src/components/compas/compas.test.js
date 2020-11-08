import React from "react";
import Compas from "./compas";
import { render } from "@testing-library/react";

describe("DurationTabs (component)", () => {
  test("renders", () => {
    render(<Compas />);
  });

  test("renders with proper angle", () => {
    const testAngle = 137;
    const container = render(<Compas angle={testAngle} />);

    const rotationContainer = container.getByTestId(
      "compas-rotation-container"
    );
    expect(rotationContainer).toHaveStyle("transform: rotate(317deg)");
  });
});
