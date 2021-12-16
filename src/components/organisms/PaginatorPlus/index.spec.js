import React from "react";
import { shallow } from "enzyme";
import PaginatorPlus from "./component";

let component = null;
const setComponent = (props) => shallow(<PaginatorPlus {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("PaginatorPlus testing:", () => {
  test("is PaginatorPlus not rendered", () => {
    component = setComponent({
      loader: true,
    });
    expect(component).toMatchSnapshot();
  });
  test("is PaginatorPlus rendered", () => {
    component = setComponent({
      loader: false,
    });
    expect(component).toMatchSnapshot();
  });
});
