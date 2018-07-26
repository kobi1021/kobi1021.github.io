import React, { Component } from "react";
import "./SwitchDayNight.css";
import { isNight } from "../../utils/isNight";

function toggleChecked(state) {
  return { isChecked: !state.isChecked };
}

class SwitchDayNight extends Component {
  constructor(props) {
    super(props);

    this.night = isNight(19, 7); // between 7pm and 7am
    //this.night = isNight(7,19); // between 7am and 7pm

    this.checkboxInput = null;

    this.setCheckboxInputRef = element => {
      this.checkboxInput = element;
    };

    this.clickCheckboxInput = () => {
      // Click the checkbox input using the raw DOM API
      if (this.checkboxInput) {
        this.checkboxInput.click();
        this.checkboxInput.checked = true;
        //console.log("this.checkboxInput exists!");
      }
    };

    this.toggleChange = this.toggleChange.bind(this);

    this.state = { isChecked: false };
  }

  toggleChange() {
    if (this.state.isChecked) {
      document.body.classList.remove("night");
    } else {
      document.body.classList.add("night");
    }
    this.setState(toggleChecked);
    //console.log('state='+this.state.isChecked);
  }

  componentDidMount() {
    if (this.night) {
      this.clickCheckboxInput();
    }
    //console.log("componentDidMount()");
  }

  componentDidUpdate() {
    //console.log("componentDidUpdate(): this.state.isChecked="+this.state.isChecked);
  }

  render() {
    return (
      <div className="toggle-box">
        <input
          type="checkbox"
          name="checkbox1"
          id="toggle-box-checkbox"
          checked={this.state.isChecked}
          onClick={this.toggleChange}
          ref={this.setCheckboxInputRef}
        />
        <label
          htmlFor="toggle-box-checkbox"
          className="toggle-box-label-left"
        />
        <label htmlFor="toggle-box-checkbox" className="toggle-box-label" />
      </div>
    );
  }
}

export default SwitchDayNight;
