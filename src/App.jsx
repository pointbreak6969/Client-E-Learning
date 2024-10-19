import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import SearchCourse from "./components/SearchCourse";
import BecomeAInstructor from "./pages/BecomeAInstructor";
import SearchBox from "./components/SearchBox.jsx";
import Video from "./pages/Video.jsx";
import Signup from "./components/Signup.jsx";
import Authentication from "./components/Authentication.jsx";
import Login from "./components/Login.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/authentication" element={<Authentication />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="register" Component={Signup} />
          <Route path="login" Component={Login} />
        </Route>
        <Route path="/about" Component={About} />
        <Route path="/search" Component={SearchCourse} />
        <Route path="/becomeInstructor" Component={BecomeAInstructor} />
        <Route path="/searchBox" Component={SearchBox} />
        <Route path="/video" Component={Video} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
