import React, { Component } from "react";
import BackgroundScene from "./components/BackgroundScene/BackgroundScene";
//import AWSCertified from "./components/AWSCertified/AWSCertified";
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
              A full-stack web developer who loves DevOps and architecting cloud
              infrastructure.{" "}
              <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2018-11-02&ci=AWS00334004">
                <strong>AWS Certified Cloud Practitioner</strong>
              </a>{" "}
              who is studying for more AWS certifications and learning
              Kubernetes and Golang. Aside from work, I enjoy photography,
              basketball, traveling, technology, video games and 3D animation.
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
