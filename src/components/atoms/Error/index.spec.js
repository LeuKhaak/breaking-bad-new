import React from "react";
import { shallow } from "enzyme";
import Error from ".";

let component = null;
const setComponent = (props) => shallow(<Error {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("Error testing:", () => {
  test("is Error contain text", () => {
    component = setComponent({
      notice: "Error",
    });
    expect(component).toMatchSnapshot();
  });
  test("is Error contain nothing", () => {
    component = setComponent({});
    expect(component).toMatchSnapshot();
  });
});
