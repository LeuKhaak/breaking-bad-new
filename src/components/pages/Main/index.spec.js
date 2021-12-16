import React from "react";
import { shallow } from "enzyme";
import Main from ".";

let component = null;
const setComponent = () => shallow(<Main />);
beforeEach(() => {
  component = setComponent();
});

describe("Main testing:", () => {
  test("is Main rendered", () => {
    component = setComponent({});
    expect(component).toMatchSnapshot();
  });
});
