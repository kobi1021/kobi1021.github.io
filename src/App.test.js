import React from "react";
import { shallow } from "enzyme";
//import ReactDOM from "react-dom";
import App from "./App";

//it("renders without crashing", () => {
//  const div = document.createElement("div");
//  ReactDOM.render(<App />, div);
//  ReactDOM.unmountComponentAtNode(div);
//});

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders hello message", () => {
  const wrapper = shallow(<App />);
  const hello = <p className="title">Hello! I'm Biko Allen.</p>;
  expect(wrapper.contains(hello)).toEqual(true);
});
