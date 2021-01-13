import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
import BeatLoader from "react-spinners/BeatLoader";
import BarLoader from "react-spinners/BarLoader";

const RadioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [buffer, setBuffer] = useState(false);
  const [elapsedTime, setElapsedTime] = useState("");
  const [source, setSource] = useState("");
  const playerRef = useRef(null);

  const pad = (d) => {
    return d < 10 ? "0" + d.toString() : d.toString();
  }
  const togglePlayer = () => {
    setPlaying(!playing);
  };

  const toggleBuffer = () => {
    setBuffer(!buffer);
  };

  const showPlayerStatus = () => {
    if (playing) return <FontAwesomeIcon icon={["fa", "pause"]} pull="left" />;
    else return <FontAwesomeIcon icon={["fa", "play"]} pull="left" />;
  };

  const handleOnReady = () => {
    setBuffer(false);
  };

  const handleElapsedTime = (seconds) => {
      let time = parseInt(seconds.playedSeconds);
      let timeString = `${time / 60 | 0}:${pad(time % 60)}`;
      setElapsedTime(timeString);
  }

  return (
    <>
      <ReactPlayer
        style={{ display: "none" }}
        ref={playerRef}
        url="https://manilabr.radioca.st/;"
        playing={playing}
        onReady={handleOnReady}
        onProgress={handleElapsedTime}
        onBuffer={toggleBuffer}
        onError={(e) => console.log("onError", e)}
      />
      <div className="rp_container d-flex justify-content-between">
        <div className="d-flex">
          <div className="play_btn align-self-center" onClick={togglePlayer}>
            {showPlayerStatus()}
          </div>
          <div className="rp_details">
            <span className="r_title">DZRH 666 Kzh</span>
            <span className="r_subtitle">KAUNAUNAHAN SA PILIPINAS</span>
          </div>
        </div>
        <div className="rp_timer">{elapsedTime}</div>
        <div
          className="rp_loader"
          style={{ position: "absolute", bottom: "0", left: "0" }}
        >
          <BarLoader height={4} width="400" color={"red"} loading={buffer} />
        </div>
      </div>
    </>
  );
};

export default RadioPlayer;
