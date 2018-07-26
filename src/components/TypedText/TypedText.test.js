import React from "react";
import { shallow } from "enzyme";
import TypedText from "./TypedText";

it("renders hello message", () => {
  const wrapper = shallow(<TypedText strings={["Hello"]} />);
  const welcome = "Hello";
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
