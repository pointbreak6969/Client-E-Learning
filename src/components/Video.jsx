import { categories } from "../utlis/list";
import TestNavbar from "./TestNavbar";
import { useParams } from "react-router-dom";
const Video = () => {
  const {name} = useParams();
  const product = categories.find((category) => category.name === name);
  return (
    <>
      <TestNavbar />
    </>
  );
};

export default Video;
