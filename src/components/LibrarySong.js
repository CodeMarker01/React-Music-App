import React from "react";

function LibrarySong({ currentSong, song }) {
  //EVENT HANDLER
  const songSelectHandler = (e) => {
    console.log(e.target);
  };

  //RETURN
  return (
    <div onClick={songSelectHandler} className="librarySong">
      <img src={song.cover} alt="" />

      <div className="librarySong__description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
