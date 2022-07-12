import React from "react";
import guitar from "./components/guitar-svgrepo-com.svg";
import "./App.css";
import Song from "./components/song";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="d-flex m-4">
        <img height="60" src={guitar} />
        <h1>Guitar Tabs</h1>
      </header>
      <Song />
    </div>
  );
}

export default App;
