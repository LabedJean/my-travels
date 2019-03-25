import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Travel
          destination="Miami"
          country="United States of America"
          photo="https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3638/SITours/los-angeles-city-tour-by-night-in-los-angeles-445299.jpg"
          distance="7 352 km"
        />
        <Travel
         destination="Los Angeles"
         country="United States of America"
         photo="https://storage.googleapis.com/images.frenchmorning.com/2018/09/180614153928-03-miami-south-beach-696x378.jpg"
         distance="9 080 km"
        />
      </div>
    );
  }
}

export default App;