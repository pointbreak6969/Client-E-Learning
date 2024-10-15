import Navbar from "./Navbar";
import { categories } from "../utlis/list";
import useDebounce from "../utlis/useDebounce";
import { useSelector } from "react-redux";
import Course from "./Course";
const SearchCourse = () => {
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const filteredCourses = categories.filter((item) => {
    const normalizeString = (str) => 
      str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters (like ".", "-", etc.)
  
    const normalizedItemName = normalizeString(item.name);
    const normalizedQuery = normalizeString(searchQuery);
  
    return normalizedItemName.includes(normalizedQuery);
  });
  
  const debouncedSearchTerm = useDebounce(filteredCourses, 500);
  return (
    <>
      <div>
        <Navbar />
      </div>
      
    </>
  );
};

export default SearchCourse;
