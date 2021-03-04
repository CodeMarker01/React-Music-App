import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Player() {
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
        <FontAwesomeIcon icon={faPlay} size="2x" className="player__play" />
        <FontAwesomeIcon
          icon={faForward}
          size="2x"
          className="plaer__forward"
        />
      </div>
    </div>
  );
}

export default Player;
