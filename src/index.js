import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Montserrat:300,400,500,600,700",
      "Nunito:300,400,500,600,700",
      "sans-serif"
    ]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
