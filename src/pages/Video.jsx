import { categories } from "../utlis/list";
import logo from "../assets/Logo.png";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { FaShare } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import "../styles/videoPage.css";
import VideoContents from "../components/VideoContents";
import { useState } from "react";
import SearchBox from "../components/SearchBox";
import Footer from "../components/Footer";
import Review from "../components/Review";
import Rte from "../components/Rte";
import { useForm } from "react-hook-form";
const Video = () => {
  const { control, getValues } = useForm({
    defaultValues: {
      content: "",
    },
  });
  const [activeSection, setActiveSection] = useState("CourseContent");
  const sections = [
    { id: "SearchContent", content: <IoMdSearch className="text-2xl" /> },
    { id: "CourseContent", content: <h3>Course Contents</h3> },
    { id: "Overview", content: <h3>Overview</h3> },
    { id: "Notes", content: <h3>Notes</h3> },
    { id: "Review", content: <h3>Review</h3> },
  ];
  const product = categories[0];
  const content = product.videoContents;
  return (
    <>
      <div className="bg-slate-700 sm:px-5 sm:py-2">
        <div className="sm:flex sm:items-center sm:justify-between border-b-1">
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
          <div className="hidden sm:block">
            <button className="px-3 py-1 text-white font-bold border-2 hover:text-gray-300 cursor-pointer">
              Share <FaShare className="inline-block ml-1" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className=" bg-slate-700 flex justify-center items-center video-container">
          <VideoPlayer product={product} />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center font-serif sub-nav">
            {sections.map((section) => (
              <div
                key={section.id}
                onClick={() => setActiveSection(section.id)}
              >
                {section.content}
              </div>
            ))}
          </div>
          <div className="mt-10 mx-auto max-w-4xl px-5 xl:px-0">
            {activeSection === "SearchContent" && <SearchBox />}
            {activeSection === "CourseContent" &&
              content.map((unit, index) => {
                return (
                  <div key={index}>
                    <VideoContents
                      unitName={unit.UnitName}
                      lessons={unit.Lessons}
                    />
                  </div>
                );
              })}
            {activeSection === "Notes" && (
              <Rte
                name="Content"
                control={control}
                defaultValue={getValues("content")}
              />
            )}
            {activeSection === "Review" && <Review />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Video;
