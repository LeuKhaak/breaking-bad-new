import React from "react";
import { shallow } from "enzyme";
import Card from "./component";

let component = null;
const setComponent = (props) => shallow(<Card {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("Card testing:", () => {
  test("is Error shown", () => {
    component = setComponent({
      getError: true,
    });
    expect(component).toMatchSnapshot();
  });

  test("is Loader shown", () => {
    component = setComponent({
      getError: null,
      loader: true,
    });
    expect(component).toMatchSnapshot();
  });

  test("is Card rendered with status Alive", () => {
    component = setComponent({
      getError: null,
      loader: false,
      tiles: true,
      personData: {
        status: "Alive",
        name: "Jeck",
      },
    });
    expect(component).toMatchSnapshot();
  });

  test("is Card rendered with status Deceased", () => {
    component = setComponent({
      getError: null,
      loader: false,
      tiles: true,
      personData: {
        status: "Deceased",
        name: "Ann",
      },
    });
    expect(component).toMatchSnapshot();
  });

  test("is quoteError shown", () => {
    component = setComponent({
      quoteError: true,
    });
    expect(component).toMatchSnapshot();
  });

  test("is quoteLoader shown", () => {
    component = setComponent({
      quoteError: null,
      quoteLoader: true,
    });
    expect(component).toMatchSnapshot();
  });

  test("is quote rendered", () => {
    component = setComponent({
      personData: {
        status: "Alive",
        name: "Jeck",
      },
      quoteError: null,
      quoteLoader: false,
      quoteData: "Test quote",
    });
    expect(component).toMatchSnapshot();
  });
});
