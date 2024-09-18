import "./App.css"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter,Routes,  Route } from "react-router-dom";
import About from "./pages/About";
import SearchCourse from "./components/SearchCourse";
import BecomeAInstructor from "./pages/BecomeAInstructor";
import SearchBox from "./components/SearchBox.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path= "/register" Component = {Register}/>
        <Route path="/login" Component={Login} />
        <Route path="/about" Component={About} />
        <Route path="/search" Component={SearchCourse} />
        <Route path="/becomeInstructor" Component={BecomeAInstructor} />
        <Route path="/searchBox" Component={SearchBox}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
