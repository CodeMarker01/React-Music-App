import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Player({
  currentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  audioRef,
}) {
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

  const timeUpdateHandler = (e) => {
    // khi click, e.target = <audio></audio>
    // console.log(e.target);
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  const dragHandler = (e) => {
    // console.log(e.target.value);
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div className="player">
      <div className="player__timeControl">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          type="range"
          name=""
          id=""
          value={songInfo.currentTime}
          min="0"
          max={songInfo.duration}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>

      <div className="player__playControl">
        <FontAwesomeIcon
          icon={faBackward}
          size="2x"
          className="player__backward"
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
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default Player;
