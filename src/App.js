import React, { Component } from "react";
import SwitchDayNight from "./components/SwitchDayNight/SwitchDayNight";
import TypedText from "./components/TypedText/TypedText";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SwitchDayNight />
        <br />
        <TypedText strings={["Hello!"]} typeSpeed={50} />
        <br />
        <DigitalClock />
      </div>
    );
  }
}

export default App;
