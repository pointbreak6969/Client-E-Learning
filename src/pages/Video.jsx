import { categories } from "../utlis/list";
import logo from "../assets/Logo.png"
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { FaShare } from "react-icons/fa";
const Video = () => {
  const {name} = useParams();
  // const product = categories.find((category) => category.name === name);
  const product = categories[0]
  return (
    <>
      <div className="bg-slate-700 flex items-center justify-between">
        <div className="flex items-center p-2 gap-10">
        <div className="w-20 cursor-pointer">
          <img src={logo} alt="" />
        </div>
        
        <div className="text-white text-xl font-sans hover:text-gray-300 cursor-pointer">
          {product.name}
        </div>
        </div>
        <div className="pr-5">
          <button className="px-3 py-1 text-white font-bold border-2 hover:text-gray-300 cursor-pointer">Share <FaShare className="inline-block ml-1"/>
          </button>
        </div>
      </div>
      <div>
        <VideoPlayer product={product} />
      </div>
    </>
  );
};

export default Video;
