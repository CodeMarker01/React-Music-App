import React from "react";

function LibrarySong({
  currentSong,
  setCurrentSong,
  song,
  songs,
  id,
  audioRef,
  isPlaying,
}) {
  //EVENT HANDLER
  const songSelectHandler = async () => {
    // const selectedSong = songs.filter((state) => state.id === id);
    // setCurrentSong(selectedSong[0]);
    // * khong can dung filter vi khi click minh da access vao "song" luon roi
    await setCurrentSong(song);

    //check if the song is playing
    if (isPlaying) {
      audioRef.current.play();
    }
    //autoplay the song when selected
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
