import React, { useState } from "react";
import "../styles/videoPage.css"
const VideoPlayer = ({ product }) => {
  return (
    <>
      <video controls className="object-contain h-full w-full">
        <source  src={product.video} type="video/mp4"/>
      </video>
    </>
  );
};

export default VideoPlayer;
