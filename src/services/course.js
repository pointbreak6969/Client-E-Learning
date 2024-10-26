import axios from "axios";
class CourseService {
  async createCourse({
    name,
    description,
    level,
    currentPrice,
    category,
    thumbnail,
  }) {
    const courseData = new FormData();
    courseData.append("name", name);
    courseData.append("description", description);
    courseData.append("level", level);
    courseData.append("currentPrice", parseInt(currentPrice));
    courseData.append("category", category);
    if (thumbnail) {
      courseData.append("thumbnail", thumbnail[0]);
    }
    try {
      const response = await axios.post(
        "http://localhost:5050/api/course/createCourse",
        courseData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
const courseService = new CourseService()
export default courseService;