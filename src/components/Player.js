import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Player({ currentSong, isPlaying, setIsPlaying }) {
  // REF
  // grab audio tag
  const audioRef = useRef(null);
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

  return (
    <div className="player">
      <div className="player__timeControl">
        <p>Start time</p>
        <input type="range" name="" id="" />
        <p>End time</p>
      </div>

      <div className="player__playControl">
        <FontAwesomeIcon
          icon={faBackward}
          size="2x"
          className="player__backward"
        />
        <FontAwesomeIcon
          icon={faPlay}
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
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default Player;
