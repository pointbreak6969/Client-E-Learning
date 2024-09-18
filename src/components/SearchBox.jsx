import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { categories } from "../utlis/list";
import VideoContents from "./VideoContents";
import { useDebounce } from "@uidotdev/usehooks";
const SearchBox = () => {
  const [searchCourseContent, setSearchCourseContent] = useState("");
  const product = categories[0];
  const searchItem = product.videoContents;
  const filterItem = searchItem.filter((item) => {
    const lowercaseUnitName = item.UnitName.toLowerCase();
    const lowercaseLessons = item.Lessons.map((lesson) => lesson.toLowerCase());

    if (lowercaseUnitName.includes(searchCourseContent)) {
      return item;
    }
    if (lowercaseLessons.some((lesson) => lesson.includes(searchCourseContent))) {
      return item;
    }
    return null;
  });
  const debouncedSearchItem = useDebounce(filterItem, 500)
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="border-solid border-1 border-black  flex">
          <input
            type="text"
            placeholder="Search course content"
            className="p-2 flex-1"
            value={searchCourseContent}
            onChange={(e) => setSearchCourseContent(e.target.value)}
          />
          <button className="bg-black p-2 hover:opacity-80 ">
            <IoIosSearch className="text-2xl text-white" />
          </button>
        </div>
        {searchCourseContent == "" ? (
          <div className="flex justify-center items-center flex-col gap-2">
            <h2 className="text-2xl font-serif">Start a new Search</h2>
            <h4 className="text-xl">To find lectures, resources, notes</h4>
          </div>
        ) : (
          debouncedSearchItem?.map((unit, index) => {
            return (
              <div key={index}>
                <VideoContents
                  unitName={unit.UnitName}
                  lessons={unit.Lessons}
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default SearchBox;
