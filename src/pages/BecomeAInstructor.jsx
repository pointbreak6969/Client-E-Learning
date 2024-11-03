import image1 from "../assets/instructor1.png";
import image2 from "../assets/instructor2.png";
import image3 from "../assets/instructor3.png";
import image4 from "../assets/instructor4.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/becomeInstructor.css";
import courseService from "@/services/course";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
const BecomeAInstructor = () => {
  const navigate = useNavigate();
  const [userCourse, setUserCourse] = useState();
  const [progress, setProgress] = useState(10)
  useEffect(() => {
    const fetchData = async () => {
      const response = await courseService.getUserUploadedCourse();
      if (response) {
        setUserCourse(response.data[0]);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="become-instructor-header">
        <div className="become-instructor-header-title">
          {" "}
          <h4
            className="text-xl"
            onClick={() => {
              navigate("/");
            }}
          >
            Student
          </h4>
          <div className="become-instructor-header-dropdown">
            <p>
              Switch to the student view here - get back to the courses you’re
              taking.
            </p>
          </div>
        </div>
      </div>
      <div className="become-instructor-body">
        {userCourse ? (
          <>
            <div className="instructor-cards">
              <h1>Course</h1>
            </div>
            <div className="instructor-cards mb-20 ">
              <div className="shadow-xl p-4 flex gap-10">
                <div>
                  <img src={userCourse.thumbnail.url} className="w-28" />
                </div>
                <div>
                  <h1>{userCourse.name}</h1>
                </div>
                <div className="flex items-center"> 
                <Progress value={33} />
                </div>
              </div>
            </div>
          </>
        ) : null}
        <div className="instructor-cards">
          {userCourse ? null : (
            <div className="instructor-card-first box-shadow">
              <div className="d-flex justify-content-center">
                {" "}
                <h3>Jump into Course Creation</h3>
              </div>
              <div className=" d-flex justify-content-center mt">
                <button
                  onClick={() => {
                    navigate("/createCourse");
                  }}
                  className="button-69"
                >
                  Create Your Course
                </button>
              </div>
            </div>
          )}

          <div className="instructor-card-second">
            Based on your experience we think these resources will be helpful in
            your journey
          </div>
          <div className=" instructor-card-third box-shadow">
            <div className=" child-instructor-first d-flex justify-content-center">
              <img src={image1} alt="" />
            </div>
            <div className=" child-instructor-second d-flex justify-content-center flex-column align-items-center pd">
              {" "}
              <h3>Create an Engaging Course</h3>
              <p>
                Whether you've been teaching for years or are teaching for the
                first time, you can mmake an engaging course. We've compile
                resources and best practices to help you get to the next level,
                no matter where you're starting
              </p>
              <Link>Get Started</Link>
            </div>
          </div>

          <div className="instructor-card-fourth">
            <div className="card-fourth-left box-shadow">
              <div>
                <img src={image2} alt="" />
              </div>
              <div>
                {" "}
                <h3>Get Started with video</h3>
                <p>
                  Quality video lectures can set your course apart. Use our
                  resoureces to learn the basics
                </p>
                <Link>Get Started</Link>
              </div>
            </div>
            <div className="card-fourth-right box-shadow">
              <div className="card-fourth-right-first">
                <img src={image3} alt="" />
              </div>
              <div className=" card-fourth-right-second">
                {" "}
                <h3>Build Your Audience</h3>
                <p>
                  Set your course up for success by building your audience.
                  Teach what you know.
                </p>
                <Link>Get Started</Link>
              </div>
            </div>
          </div>
          <div className="instructor-card-fifth box-shadow mb-10">
            <div className="d-flex justify-content-center">
              <img src={image4} alt="" />
            </div>
            <div>
              <h3>Join the New Instructor Challange</h3>
              <p>
                Get exclusive tips and resources designed to help you launch
                your first course faster!Eligible instructors who publish their
                first course on time will recieve a special bonus to celebrate.
                Start Today!
              </p>
              <Link>Get Started</Link>
            </div>
          </div>
        </div>
        {userCourse ? null : (
          <div className="instructor-footer">
            <p className="p-5">Are you Ready to Begin?</p>
            <button
              onClick={() => {
                navigate("/createCourse");
              }}
              className="button-69"
            >
              Create your course
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BecomeAInstructor;
