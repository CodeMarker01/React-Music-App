import React from "react";
import LibrarySong from "./LibrarySong";

function Library({ currentSong, songs, setCurrentSong }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library__songs">
        {songs.map((s) => (
          <LibrarySong
            song={s}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
