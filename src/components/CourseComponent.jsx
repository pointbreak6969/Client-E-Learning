import { categories } from "../utlis/list";
import Course from "./Course";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const CoursesComponent = () => {
  const { name, image, author, rating, previousPrice, currentPrice } =
    categories[0];
  return (
    <>
      <div className="max-w-7xl mx-auto p-4 relative">
        <div className=" flex overflow-y-scroll ">
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
        <div className="absolute z-20 rounded-full bg-slate-700 text-2xl p-2 right-2 top-20">
          <FaChevronRight className="text-white" />
        </div>
      </div>

      {/* <div  className="max-w-7xl mx-auto flex">
                <Course
                  name={name}
                  image={image}
                  author={author}
                  rating={rating}
                  previousPrice={previousPrice}
                  currentPrice={currentPrice}
                />
              </div> */}
    </>
  );
};

export default CoursesComponent;
