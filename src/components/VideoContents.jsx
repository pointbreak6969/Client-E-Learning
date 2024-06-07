import { useState } from "react";
import { categories } from "../utlis/list";
import "../styles/videoContents.css";
import { FaAngleDown } from "react-icons/fa";
const VideoContents = ({ unitName, lessons }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const data = categories[0].videoContents;
  return (
    <>
      <div className="video-units">
        <div
          className="text-xl  font-normal cursor-pointer flex justify-between w-full video-unit-name"
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <h2>{unitName}</h2>
          <p className={unitName ? "" : "hidden"}>
            <FaAngleDown />
          </p>
        </div>
      </div>
      <div className={isDropdownOpen ? "video-lessons" : "hidden"}>
        {lessons.map((lesson, index) => {
          return (
            <div key={index} className="flex gap-5">
              <span>
                <input type="checkbox" />
              </span>
              <p>
              
                {index + 1}. {lesson}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideoContents;
