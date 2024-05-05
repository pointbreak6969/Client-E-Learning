import { useState } from "react";
import { validateEmail } from "../utlis/validateEmail";
import "../styles/login.css"
import "../styles/register.css";
import logo from "../assets/Logo.png"
import student from "../assets/student.png"
import { Link, useNavigate  } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { FaArrowLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

const Login = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState({
      value: "",
      isTouched: false,
    });
  
    const [errorMessage, setErrorMessage] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const IsFormValid = () => {
      return (
        validateEmail(loginEmail) &&
        loginPassword.value.length >= 8 &&
        loginPassword.isTouched
      );
    };
    const handelLoginSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const loginData = {
          email: loginEmail,
          password: loginPassword.value,
        };
        // await fetch("http://localhost:5050/auth/userLogin", {
        //   method: "POST",
        //   credentials: 'include',
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(loginData),
        // });
        if (IsFormValid()) {
          setErrorMessage(false);
          setLoginEmail("");
          setLoginPassword({
            value: "",
            isTouched: false,
          });
        } else {
          setErrorMessage(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <>
      <FaArrowLeft className="navigate" onClick={handleGoBack}/>
        <div className="register-container">
          <div className="register-wrapper">
            <div className="register-left">
              <div className="register-left-logo" onClick={()=>{
                navigate('/');
              }}>
                <img src={logo} alt="" />
              </div>
              <div className="register-left-text">
                <h3>Learn From World's Best Instructors 🌍 Around The World.</h3>
              </div>
              <div className="register-left-img">
                <img src={student} alt="" />
              </div>
            </div>
            <div className="register-right">
              <form
                action=""
                className="login-right-wrapper"
                onSubmit={handelLoginSubmit}
              >
                <h2>Login To Your Account</h2>
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  className="input-field"
                  value={loginEmail}
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                  }}
                />
                <FormControl className="input-field" variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    error={
                      loginPassword.value.length < 8 &&
                      loginPassword.isTouched
                    }
                   
                    id="standard-adornment-password"
                    value={loginPassword.value}
                    onChange={(e) => {
                      setLoginPassword({
                        value: e.target.value,
                        isTouched: true,
                      });
                    }}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div className="register-submit">
                  {errorMessage && (
                    <div style={{ color: "red" }}>
                      {"Please fill the form correctly"}
                    </div>
                  )}
                  <button type="submit">Submit</button>
                </div>
                <div className="next-option">
                  <div className="or"></div>
                  <span>Or Sign In With</span>
                </div>
                <div className="signup-options">
                  <FcGoogle />
                  <MdOutlineFacebook style={{ color: "#316FF6" }} />
                </div>
                <div className="already-account">
                  <span>Don't have an account?</span>
                  <Link to="/register">Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Login;