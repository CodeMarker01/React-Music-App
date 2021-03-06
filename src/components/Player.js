import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../util";

function Player({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  audioRef,
  songs,
  setSongs,
}) {
  // USE EFFECT
  useEffect(() => {
    //todo kiem tra currentSong va thay doi active
    const newSongs = songs.map((s) => {
      if (s.id === currentSong.id) {
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
  }, [currentSong]);

  // EVENT HANDLERS
  const playSongHandler = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    // console.log(e.target.value);
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    //todo cach 1 ko lap lai
    // if (direction === "skip-back") {
    //   if (currentIndex >= 1) setCurrentSong(songs[currentIndex - 1]);
    //   else setCurrentSong(songs[0]);
    // } else {
    //   if (currentIndex <= songs.length - 2)
    //     setCurrentSong(songs[currentIndex + 1]);
    //   else setCurrentSong(songs[songs.length - 1]);
    // }

    //todo cach 2 lap lai
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else if (direction === "skip-back") {
      // if (currentIndex <= 0) currentIndex = songs.length;
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        playAudio(isPlaying, audioRef);
        return;
        //neu ko dung return thi state setCurrentSong ben duoi se chay va gay ra scrash
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    playAudio(isPlaying, audioRef);
  };

  // ADD INPUT STYLES
  const trackAnimate = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  const activeSong = songs.filter((song) => song.active === true);
  return (
    <div className="player">
      <div className="player__timeControl">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="player__track"
        >
          <input
            onChange={dragHandler}
            type="range"
            name=""
            id=""
            value={songInfo.currentTime}
            min="0"
            max={songInfo.duration || 0}
          />
          <div style={trackAnimate} className="player__animateTrack"></div>
        </div>

        {/* songInfo.duration ? getTime(songInfo.duration) : '0:00' */}
        <p>{getTime(songInfo.duration || 0)}</p>
      </div>

      <div className="player__playControl">
        <FontAwesomeIcon
          icon={faBackward}
          size="2x"
          className="player__backward"
          onClick={() => {
            skipTrackHandler("skip-back");
          }}
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          className="player__play"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          icon={faForward}
          size="2x"
          className="plaer__forward"
          onClick={() => {
            skipTrackHandler("skip-forward");
          }}
        />
      </div>
    </div>
  );
}

export default Player;
