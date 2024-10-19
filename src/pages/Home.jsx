import Navbar from "../components/Navbar";
import Content from "../components/Content";
import CoursesComponent from "../components/CourseComponent";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar />
        <Content />
        <CoursesComponent/>
        <Footer/>
        </>
    )
}

export default Home;