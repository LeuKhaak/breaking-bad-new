import React from "react";
import { shallow } from "enzyme";
import Search from ".";

let component = null;
const onChange = jest.fn();
const onKeyPress = jest.fn();
const setComponent = (props) => shallow(<Search {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("Search testing:", () => {
  test("is Search rendered", () => {
    component = setComponent({
      characterName: "Test name",
    });
    expect(component).toMatchSnapshot();
  });

  test("onChangeFunc", () => {
    component = setComponent({
      createName: onChange,
    });
    component.find("input").simulate("change", { target: { value: "S" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("onKeyPressFunc", () => {
    component = setComponent({
      searchCharacter: onKeyPress,
    });
    component.find("input").simulate("keypress", { key: "Enter", value: "Sk" });
    expect(onKeyPress).toHaveBeenCalled();
  });
});
