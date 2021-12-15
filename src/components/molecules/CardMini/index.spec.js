import React from "react";
import { shallow } from "enzyme";
import CardMini from ".";

let component = null;
//const onClick = jest.fn();
const setComponent = (props) => shallow(<CardMini {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("CardMini testing:", () => {
  test("is CardMini contain img", () => {
    component = setComponent({
      img: "./test.jpg",
      status: "Alive",
    });
    expect(component).toMatchSnapshot();
  });
});
