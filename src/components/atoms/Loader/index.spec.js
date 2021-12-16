import React from "react";
import { shallow } from "enzyme";
import Loader from ".";

let component = null;
const setComponent = () => shallow(<Loader />);
beforeEach(() => {
  component = setComponent();
});

describe("Loader testing:", () => {
  test("is Loader rendered", () => {
    component = setComponent();
    expect(component).toMatchSnapshot();
  });
});
