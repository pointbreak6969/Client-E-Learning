import { categories } from "../utlis/list";
import logo from "../assets/Logo.png"
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
const Video = () => {
  const {name} = useParams();
  // const product = categories.find((category) => category.name === name);
  const product = categories[0]
  return (
    <>
      <div className="bg-slate-800">
        <div className="w-20">
          <img src={logo} alt="" />
        </div>
      </div>
      <div>
        <VideoPlayer product={product} />
      </div>
    </>
  );
};

export default Video;
