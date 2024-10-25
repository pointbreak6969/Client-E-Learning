import Navbar from "./Navbar";
import { categories } from "../utlis/list";
import useDebounce from "../utlis/useDebounce";
import { useSelector } from "react-redux";
const SearchCourse = () => {
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const filteredCourses = categories.filter((item) => {
    const normalizeString = (str) =>
      str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters (like ".", "-", etc.)

    const normalizedItemName = normalizeString(item.name);
    const normalizedQuery = normalizeString(searchQuery);

    return normalizedItemName.includes(normalizedQuery);
  });

  const debouncedSearchTerm = useDebounce(filteredCourses, 500);
  return (
    <>
      <div>
        <Navbar />
        <div>
          <div className="max-w-7xl mx-auto p-4 relative">
            <div className="flex gap-5">
              <div className="w-1/6">
                <img src={categories[0].image} className="h-36" alt="" />
              </div>
              <div className="flex justify-between w-full" >
                <div className="w-full" >
                  <div>
                    <h3 className="font-semibold text-lg">Complete Web Development Course</h3>
                  </div>
                  <div>
                    <p>The only web development course you need to learn HTML, CSS, JavaScript, MongoDb, Tailwind, Node, React, Prisma, Deployment etc </p>
                  </div>
                  <div></div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <p>NPR:5000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCourse;
