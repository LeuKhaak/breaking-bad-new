import React from "react";
import { shallow } from "enzyme";
import Card from "./component";

let component = null;
//const onClick = jest.fn();
const setComponent = (props) => shallow(<Card {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("Card testing:", () => {
  test("is Card rendered", () => {
    component = setComponent({
      //error: null,
      //loader: false,
      indicator: true,
      personData: {
        status: "Alive",
      },
    });
    expect(component).toMatchSnapshot();
  });

  //test("is Btn contain text", () => {
  //  component = setComponent({
  //    btnText: "testText",
  //    btnStyle: "testStyle",
  //  });
  //  expect(component).toMatchSnapshot();
  //});

  //test("is Btn contain text and icon", () => {
  //  component = setComponent({
  //    icon: "./test.jpg",
  //    btnText: "testText",
  //    btnStyle: "testStyle",
  //  });
  //  expect(component).toMatchSnapshot();
  //});

  //test("is Btn contain nothing", () => {
  //  expect(component).toMatchSnapshot();
  //});

  //test("is Btn not displayed", () => {
  //  component = setComponent({
  //    btnText: "testText",
  //    disp: "none",
  //  });
  //  expect(component).toMatchSnapshot();
  //});

  //test("is Btn has backgroung", () => {
  //  component = setComponent({
  //    btnText: "testText",
  //    location: "/catalog",
  //  });
  //  expect(component).toMatchSnapshot();
  //});

  //test("is Btn hasn`t backgroung", () => {
  //  component = setComponent({
  //    icon: "./test.jpg",
  //    location: "/person/1",
  //  });
  //  expect(component).toMatchSnapshot();
  //});

  //test("onClickFunc", () => {
  //  component = setComponent({
  //    onClick: onClick,
  //    icon: "./test.jpg",
  //  });
  //  component.find("button").simulate("click");
  //  expect(onClick).toHaveBeenCalled();
  //});
  //test("is Btn has className", () => {
  //  component = setComponent({
  //    btnText: "testText",
  //    btnStyle: "buttonNext",
  //  });
  //  expect(component.find("buttonNext")).toBeTruthy();
  //});
});
