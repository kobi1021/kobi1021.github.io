import React, { Component } from "react";
import "./DigitalClock.css";

class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.updateDate = this.updateDate.bind(this);

    this.state = {
      date: new Date().toLocaleTimeString()
    };
    this.interval = setInterval(this.updateDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateDate() {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }

  render() {
    return <div>The time is {this.state.date}</div>;
  }
}

export default DigitalClock;
