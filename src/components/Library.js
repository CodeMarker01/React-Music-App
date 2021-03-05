import React from "react";
import LibrarySong from "./LibrarySong";

function Library({ currentSong, songs, setCurrentSong, audioRef, isPlaying }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library__songs">
        {songs.map((s) => (
          <LibrarySong
            songs={songs}
            song={s}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            id={s.id}
            key={s.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
