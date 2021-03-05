import React from "react";
import LibrarySong from "./LibrarySong";

function Library({
  currentSong,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) {
  return (
    <div className={`library`}>
      <h2>Library</h2>
      <div className="library__songs">
        {songs.map((s) => (
          <LibrarySong
            songs={songs}
            song={s} // mỗi LibrarySong hay mỗi bài hát sẽ có 1 song riêng, trong song bao gồm name, cover, active... riêng với nhau, nên khi dùng chỉ cần lấy các attribute của song là đuọc
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            id={s.id}
            key={s.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
