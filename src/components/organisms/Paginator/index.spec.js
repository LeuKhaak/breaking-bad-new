import React from "react";
import { shallow } from "enzyme";
import Paginator from "./component";

let component = null;
const setComponent = (props) => shallow(<Paginator {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("Paginator testing:", () => {
  test("is Paginator rendered", () => {
    component = setComponent({
      pages: [
        [1, 1, false],
        [2, 1, true],
        [3, 1, false],
        [4, 2, true],
        [5, 2, false],
      ],
      displayPageNumber: jest.fn(),
      displayPageDots: jest.fn(),
      currentPage: 1,
    });
    expect(component).toMatchSnapshot();
  });
});
