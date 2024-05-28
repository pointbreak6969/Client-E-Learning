import Navbar from "../components/Navbar";
import Content from "../components/Content";
import CoursesComponent from "../components/CourseComponent";
import Video from "./Video";

function Home(){
    return(
        <>
        <Navbar />
        <Content />
        <CoursesComponent/>
        </>
    )
}

export default Home;