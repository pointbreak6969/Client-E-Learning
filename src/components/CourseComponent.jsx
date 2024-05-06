import { categories } from "../utlis/list";
import Course from "./Course";

const CoursesComponent = () => {
    return (
      <>
        <div className="d-flex">
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
      </>
    );
  };
  
  export default CoursesComponent;
  