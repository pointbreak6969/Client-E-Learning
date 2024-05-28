import "./App.css"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter,Routes,  Route } from "react-router-dom";
import About from "./pages/About";
import SearchCourse from "./components/SearchCourse";
import BecomeAInstructor from "./pages/BecomeAInstructor";
import TestNavbar from "./components/TestNavbar";
import Course from "./components/Course";
import CourseComponent from "./components/CourseComponent";
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" Component={Home} />
    //     <Route path= "/register" Component = {Register}/>
    //     <Route path="/login" Component={Login} />
    //     <Route path="/about" Component={About} />
    //     <Route path="/searchCourse" Component={SearchCourse} />
    //     <Route path="/becomeInstructor" Component={BecomeAInstructor} />
    //     <Route path="/testNavbar" Component={TestNavbar} />
    //   </Routes>
    // </BrowserRouter>
    // <TestNavbar/>
   <CourseComponent/>
  );
}

export default App;
