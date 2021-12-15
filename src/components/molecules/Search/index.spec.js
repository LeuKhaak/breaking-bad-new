import React from "react";
import { shallow } from "enzyme";
import Search from ".";

let component = null;
const onChange = jest.fn();
const onKeyPress = jest.fn();
//const value = "test";
//const key = "Enter";
const setComponent = (props) => shallow(<Search {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("Search testing:", () => {
  test("is Search rendered", () => {
    component = setComponent({});
    expect(component).toMatchSnapshot();
  });

  test("onChangeFunc", () => {
    component = setComponent({
      createName: onChange,
      searchCharacter: onKeyPress,
    });
    component.find("input").simulate("change", { target: { value: "S" } });
    expect(onChange).toBeCalledWith(
      expect.objectContaining({ target: { value: "S" } })
    );
    //.expect("S");
    //component.find("input").simulate("change", { target: { value: "k" } });
    //expect(onChange).toBeCalledWith(expect("k"));
    //component.find("input").simulate("keydown", { keyCode: 13 });
    //expect(onKeyPress).toBeCalledWith(expect.objectContaining(expect("Sk")));
  });

  //test("onKeyPressFunc", () => {
  //  component = setComponent({
  //    onKeyPress: searchCharacter,
  //    icon: "./test.jpg",
  //  });
  //  component.find("input").simulate("keypress", { key, value });
  //  expect(searchCharacter).toBeCalledWith(
  //    expect.objectContaining({ key, value })
  //  );
  //});
});
