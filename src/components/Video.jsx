import { categories } from "../utlis/list";
import ReactPlayer from "react-player";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/videoPage.css";

const Video = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Video Cards */}
        </div>
      </div>
  )
};

export default Video;

