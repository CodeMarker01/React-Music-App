import React, { useState } from "react";
//Import Styles
import "./styles/app.scss";
// Adding components
import Song from "./components/Song";
import Player from "./components/Player";
// Import Data
import data from "./data";

function App() {
  //STATE
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  console.log(currentSong.artist);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
