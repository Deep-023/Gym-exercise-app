import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({url, imgUrl}) => {
  const [play, setPlay] = useState(false);
  const handleClick = () => {
    setPlay(!play);
  };
  return (
    <div onClick={handleClick}>
      <ReactPlayer
        width="100%"
        height="150%"
        playing={play}
        pip
        controls
        config={{ file: { forceHLS: true } }}
        url={url}
      />
    </div>
  );
};

export default VideoPlayer;
