import { categories } from "../utlis/list";
import logo from "../assets/Logo.png";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { FaShare } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "../styles/videoPage.css";
import VideoContents from "../components/VideoContents";
const Video = () => {
  const { name } = useParams();
  // const product = categories.find((category) => category.name === name);
  const product = categories[0];
  const content = product.videoContents;
  return (
    <>
      <div className="bg-slate-700 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center p-2 gap-10">
          <div className="hidden sm:block sm:w-20 sm:cursor-pointer">
            <img src={logo} alt="" />
          </div>

          <div className="text-white text-2xl sm:text-xl font-sans p-2 sm:p-0 flex items-center gap-4">
            <div className="sm:hidden hover:text-gray-300">
              <FaArrowLeft />
            </div>
            <h3 className="hover:text-gray-300 cursor-pointer text-ellipsis overflow-hidden line-clamp-1">
              {product.name}
            </h3>
          </div>
        </div>
        <div className="hidden sm:block sm:pr-5">
          <button className="px-3 py-1 text-white font-bold border-2 hover:text-gray-300 cursor-pointer">
            Share <FaShare className="inline-block ml-1" />
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex-3">
          <div className="react-player">
            <VideoPlayer product={product} />
          </div>
          <div>
            Description
            <p>Description goes here</p>
          </div>
        </div>

        <div className="flex-1">
          <h3>Contents</h3>
          {content.map((unit, index) => {
            return (
              <div key={index}>
                <VideoContents
                  unitName={unit.UnitName}
                  lessons={unit.Lessons}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Video;
