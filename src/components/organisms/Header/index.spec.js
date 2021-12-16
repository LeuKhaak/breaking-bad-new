import React from "react";
import { shallow } from "enzyme";
import Header from "./component";

let component = null;
const setComponent = (props) => shallow(<Header {...props} />);

beforeEach(() => {
  component = setComponent();
});

describe("Header testing:", () => {
  test("is Header rendered", () => {
    component = setComponent({
      location: "/",
    });
    expect(component).toMatchSnapshot();
  });
});
