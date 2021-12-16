import React from "react";
import { shallow } from "enzyme";
import Footer from ".";

let component = null;
const setComponent = () => shallow(<Footer />);
beforeEach(() => {
  component = setComponent();
});

describe("Footer testing:", () => {
  test("is Footer rendered", () => {
    component = setComponent();
    expect(component).toMatchSnapshot();
  });
});
