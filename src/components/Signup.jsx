import authService from "../services/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";
import { Button } from "./Buttons";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    // Check if terms are accepted
    if (!termsAccepted) {
      setError("You must accept the terms of service.");
      return;
    }

    try {
      const createdUser = await authService.createUser(data);
      if (createdUser) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          console.log(createdUser.data);
          dispatch(login(createdUser.data));
          navigate("/");
        }
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      {/* Right Section - Sign up form */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Sign up to Himalayan Sikshya
      </h2>

      <form onSubmit={handleSubmit(create)}>
        <div className="mb-2">
          <Input
            label="Your Full Name:"
            placeholder="Your Full Name"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            {...register("fullName", { required: true })}
          />
        </div>

        <div className="mb-2">
          <Input
            label="Your Email Address:"
            placeholder="Your Email Address"
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
            label="Create a Password:"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="password"
            placeholder="Create a Password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="mb-2">
          <input
            type="checkbox"
            id="terms"
            className="mr-2"
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label htmlFor="terms" className="text-gray-600 text-sm">
            By signing up, you agree to our{" "}
            <Link href="#" className="text-blue-600 underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-600 underline">
              Privacy Policy
            </Link>
            .
          </label>
        </div>

        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        <Button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Create Account
        </Button>

        <div className="my-2 text-center text-gray-500">Or</div>

        <button className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
          <FcGoogle className="w-5 h-5 mr-2" />
          Sign up with Google
        </button>
      </form>

      <p className="mt-2 text-sm text-gray-500 text-center">
        Already a member?{" "}
        <Link to={"/authentication/login"} className="text-blue-600 underline">
          Log in here
        </Link>
      </p>
    </>
  );
};

export default Signup;
