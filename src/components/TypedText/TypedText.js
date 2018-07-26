import React, { Component } from "react";
import Typed from "typed.js";
import "./TypedText.css";

class TypedText extends Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const {
      strings,
      typeSpeed,
      startDelay,
      backSpeed,
      smartBackspace,
      loop
    } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: typeSpeed,
      startDelay: startDelay,
      backSpeed: backSpeed,
      smartBackspace: smartBackspace,
      loop: loop
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span
            style={{ whiteSpace: "pre" }}
            ref={el => {
              this.el = el;
            }}
          />
        </div>
      </div>
    );
    /*
    <button onClick={() => this.typed.toggle()}>Toggle</button>
    <button onClick={() => this.typed.start()}>Start</button>
    <button onClick={() => this.typed.stop()}>Stop</button>
    <button onClick={() => this.typed.reset()}>Reset</button>
    <button onClick={() => this.typed.destroy()}>Destroy</button>
    */
  }
}

TypedText.defaultProps = {
  strings: "",
  typeSpeed: 50,
  startDelay: 2000,
  backSpeed: 50,
  smartBackspace: true,
  loop: false
};

export default TypedText;
