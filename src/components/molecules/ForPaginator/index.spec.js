import React from "react";
import { shallow } from "enzyme";
import ForPaginator from ".";

let component = null;
const setComponent = (props) => shallow(<ForPaginator {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("ForPaginator testing:", () => {
  test("is ForPaginator contain items", () => {
    component = setComponent({
      amounts: [5, 10, 15, 20],
      perPage: 10,
    });
    expect(component).toMatchSnapshot();
  });
});
