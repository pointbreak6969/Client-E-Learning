import React, {useState} from "react";

import ReactPlayer from "react-player";
const VideoPlayer = ({ product }) => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const increasePlaybackRate = () => {
    setPlaybackRate((prevRate) => prevRate + 0.25);
  };

  const decreasePlaybackRate = () => {
    setPlaybackRate((prevRate) => (prevRate > 0.25 ? prevRate - 0.25 : 0.25));
  };
  return (
    <>
      <ReactPlayer
        url={product.video}
        playing={false}
        controls={true}
        // playbackRate={playbackRate}
      />
    </>
  );
};

export default VideoPlayer;
