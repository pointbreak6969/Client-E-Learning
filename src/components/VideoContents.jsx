import { useState } from "react";
import { categories } from "../utlis/list";
import "../styles/videoContents.css";
import { FaAngleDown } from "react-icons/fa";
const VideoContents = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const data = categories[0].videoContents;
  return (
    <>
      <div className="bg-gray-300">
        <div>
          <p>Video Contents</p>
        </div>
        <div>
          {data.map((unit, index) => (
            <div key={index} className="video-units">
              <div
                className="text-xl font-bold cursor-pointer flex justify-between w-full video-unit-name"
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                <h2>{unit.UnitName}</h2>
                <p>
                  <FaAngleDown />{" "}
                </p>
              </div>

              <div className={isDropdownOpen ? "'video-lessons'" : "hidden"}>
                {unit.Lessons.map((lesson, index) => (
                  <div key={index}>{lesson}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoContents;
