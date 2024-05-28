import { categories } from "../utlis/list";
import Course from "./Course";
import "../styles/course.css"
import { useRef } from 'react';
const CourseComponent = () => { 
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  return (
    <div className="overflow-x-auto custom-grid-container">
      <div className="custom-grid">
        {categories.map((course, index) => (
          <Course
            key={index}
            name={course.name}
            author={course.author}
            rating={course.rating}
            currentPrice={course.currentPrice}
            previousPrice={course.previousPrice}
            image={course.image}
          />
        ))}
      </div>
    </div>
    
  );
};
export default CourseComponent;
  