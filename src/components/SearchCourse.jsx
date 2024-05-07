import Navbar from "./Navbar";
import { categories } from "../utlis/list";
import { useDebounce } from "@uidotdev/usehooks";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchCourse = () => {
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const filtredCourses = categories.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase() || "");
  });
  const debouncedSearchTerm = useDebounce(filtredCourses, 300);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="courses">
          <h1 className="course_title">Recommended</h1>

          <div className="all_course d-flex">
            {debouncedSearchTerm.map((course, index) => (
              <Link to={`/videopage/${course.name}`}>
                <div
                  key={index}
                  className="card card_course col-sm-3"
                  style={{ width: "277px" }}
                >
                  <img
                    src={course.image}
                    className="card-img-top course_img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title cardheading">{course.name}</h5>
                    <p className="card-text">{course.description}</p>
                    <button className="course_button">View course</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCourse;
