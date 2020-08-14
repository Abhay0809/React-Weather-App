import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Abhay2611/React-Weather-App/">
          Source Code
        </a>{" "}
        | Created by{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://abhay-web-folio.netlify.app/">
          Abhay Anand
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
