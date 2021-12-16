import React from "react";
import { shallow } from "enzyme";
import TitleAndToggle from "./component";

let component = null;
const setComponent = (props) => shallow(<TitleAndToggle {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("TitleAndToggle testing:", () => {
  test("is TitleAndToggle rendered with active lines", () => {
    component = setComponent({
      tile: false,
    });
    expect(component).toMatchSnapshot();
  });
  test("is TitleAndToggle rendered with active tiles", () => {
    component = setComponent({
      tile: true,
    });
    expect(component).toMatchSnapshot();
  });
});
