import { useEffect, useRef, useState} from "react";
import { categories } from "../utlis/list";
import Course from "./Course";
import "../styles/courseComponent.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const CoursesComponent = () => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);  
    const [showRightArrow, setShowRightArrow] = useState(true);
    //function to check scroll position
    const scrollRef = useRef(null);
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    };
    const handleScroll = () =>{
      if (scrollRef.current){
        const {scrollLeft, scrollWidth, clientWidth} = scrollRef.current;
        //check if the user is at the start of the scroll (hide left arrow)
        setShowLeftArrow(scrollLeft > 0);
        //check if the user is at the end of the scroll (hide right arrow)
        setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
      }
    }
    useEffect(()=>{
      const current = scrollRef.current;
      if (current){
        current.addEventListener('scroll', handleScroll);
      }
      return () => {  
        if (current){
          current.removeEventListener('scroll', handleScroll);
        }
      }
    },[])
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="max-w-7xl mx-auto p-4 relative">
        <div ref={scrollRef} className=" flex scrollbar-hide overflow-x-scroll">
          {categories.map((item, index) => {
            return (
              <div key={index} className="p-3">
                <Course
                  name={item.name}
                  image={item.image}
                  author={item.author}
                  rating={item.rating}
                  previousPrice={item.previousPrice}
                  currentPrice={item.currentPrice}
                />
              </div>
            );
          })}
        </div>
        {/* Scroll Left Button */}
      {showLeftArrow && (
        <div
          className="absolute z-10 rounded-full bg-slate-700 text-2xl p-2 left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={scrollLeft}
        >
          <FaChevronLeft className="text-white" />
        </div>
      )}

      {/* Scroll Right Button */}
      {showRightArrow && (
        <div
          className="absolute z-10 rounded-full bg-slate-700 text-2xl p-2 right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={scrollRight}
        >
          <FaChevronRight className="text-white" />
        </div>
      )}
      </div>
    </>
  );
};

export default CoursesComponent;

};

export default CoursesComponent;
