import React from "react";
import "../styles/course.css";
const Course = ({
  name,
  image,
  author,
  rating,
  currentPrice,
  previousPrice,
}) => {
  return (
    <>
     <div className="w-72 rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-video">
        <img src={image} alt="image" className="absolute  w-full h-full object-contain" />
      </div>
      <div className="p-2">
        <h1 className="text-2xl mb-2 line-clamp-2 overflow-ellipsis">{name}</h1>
        <p>{author}</p>
        <div>
          <p>{rating}</p>
          <span className="text-gray-400 line-through ">{previousPrice}</span>
          <span className="pl-2">{currentPrice}</span>
          </div>
      </div>
     </div>
    </>
  );
};

export default Course;
