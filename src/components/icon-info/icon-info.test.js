import React from "react";
import { render } from "@testing-library/react";

import IconInfo from "./icon-info";

describe("DurationTabs (component)", () => {
  test("renders", () => {
    const props = {
      text: "test-text",
      size: "test-size",
      iconColor: "test-icon-color",
      Icon: "div"
    };
    render(<IconInfo {...props} />);
  });

  test("propagation of props", () => {
    const props = {
      text: "test-text",
      iconSize: "test-size",
      iconColor: "test-icon-color",
      Icon: (props) => <div {...props} />
    };
    const container = render(<IconInfo {...props} />);
    const textComponent = container.getByTestId("text");
    const iconComponent = container.getByTestId("icon");
    expect(textComponent.textContent).toEqual("test-text");
    container.debug();
    expect(iconComponent).toBeInTheDOM();
    expect(iconComponent).toHaveAttribute("color", "test-icon-color");
  });
});
