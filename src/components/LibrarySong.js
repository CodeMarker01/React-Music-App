import React from "react";

function LibrarySong({
  currentSong,
  setCurrentSong,
  song,
  songs,
  setSongs,
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
      //autoplay the song when selected
      audioRef.current.play();
    }

    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  console.log("select song");

  //RETURN
  return (
    <div
      onClick={songSelectHandler}
      className={`librarySong ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="" />

      <div className="librarySong__description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
