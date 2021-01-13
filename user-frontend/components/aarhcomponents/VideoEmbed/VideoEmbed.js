import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useRef} from "react";

const VideoEmbed = ({src}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
      <div className="embed-responsive embed-responsive-16by9">
        <ReactPlayer
          className="react-player"
          url={src}
          width="100%"
          height="100%"
          onPlay={() => {
            setIsPlaying(true);
          }}
          onPause={()=>{
              setIsPlaying(false);
          }}
        />
        {!isPlaying && (
          <button className="btn listenlive-overlay">
            <FontAwesomeIcon
              icon={["fas", "headphones-alt"]}
              style={{ marginRight: "10px" }}
            />
            LISTEN LIVE
          </button>
        )}
      </div>
    );
}

export default VideoEmbed