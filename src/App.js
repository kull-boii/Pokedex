import React, { Component } from "react";
import Pokegame from "./Components/Pokegame";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Pokecard id={4} name="Charmender" type="Fire" exp={62} /> */}
      <Pokegame />
    </div>
  );
}

export default App;
