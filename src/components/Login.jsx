import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../redux/authSlice";
import Input from "./Input";
import { Button } from "./Buttons";
import { useDispatch } from "react-redux";
import authService from "../services/auth";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        dispatch(authLogin({user: session.data.user}));
        navigate("/");
      }
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Login to Himalayan Sikshya
      </h2>

      <form onSubmit={handleSubmit(login)}>
        <div className="mb-2">
          <Input
            label="Enter Your Email Address:"
            placeholder="Enter Your Email Address"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
        </div>

        <div className="mb-2">
          <Input
            label="Enter Your Password:"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="password"
            placeholder="Enter Your Password"
            {...register("password", { required: true })}
          />
        </div>
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        <Button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Login
        </Button>

        <div className="my-2 text-center text-gray-500">Or</div>

        <button className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
          <FcGoogle className="w-5 h-5 mr-2" />
          Login with Google
        </button>
      </form>

      <p className="mt-2 text-sm text-gray-500 text-center">
        Don't have an account??{" "}
        <Link
          to={"/authentication/register"}
          className="text-blue-600 underline"
        >
          Signup in here
        </Link>
      </p>
    </>
  );
};
export default Login;
