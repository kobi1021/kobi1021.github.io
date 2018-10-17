import React, { Component } from "react";
import BackgroundScene from "./components/BackgroundScene/BackgroundScene";
import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="hero">
        <BackgroundScene />

        <div className="hero-body">
          <div className="container">
            <p className="title">Hello! I'm Biko Allen.</p>
            <p className="subtitle">
              A web developer who has over 15 years experience in front-end and
              back-end development along with 5 years in DevOps and AWS cloud
              infrastructure. Aside from work, I have a passion for photography,
              traveling, basketball, technology, video games and computer
              graphics.
            </p>
            <p>
              <a href="https://github.com/kobi1021">
                <span className="icon is-medium">
                  <i className="fab fa-lg fa-github" />
                </span>
              </a>
              <a href="https://www.linkedin.com/in/bikoallen/">
                <span className="icon is-medium">
                  <i className="fab fa-lg fa-linkedin" />
                </span>
              </a>
              <a href="https://codepen.io/kobi1021/">
                <span className="icon is-medium">
                  <i className="fab fa-lg fa-codepen" />
                </span>
              </a>
              <a href="https://keybase.io/kobi1021">
                <span className="icon is-keybase">
                  <i className="fab fa-lg fa-keybase" />
                </span>
              </a>
              <a href="https://www.instagram.com/kobi1021/">
                <span className="icon is-medium">
                  <i className="fab fa-lg fa-instagram" />
                </span>
              </a>
              <a href="https://twitter.com/kobi1021">
                <span className="icon is-medium">
                  <i className="fab fa-lg fa-twitter" />
                </span>
              </a>
              <a href="https://www.facebook.com/biko.allen">
                <span className="icon is-medium">
                  <i className="fab fa-lg fa-facebook" />
                </span>
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
