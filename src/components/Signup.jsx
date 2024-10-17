import authService from "../services/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";
import { Button } from "./Buttons";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import photo from "../assets/photo.jpg";
import { FcGoogle } from "react-icons/fc";
import Navbar from "./Navbar";

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
            console.log(createdUser);
          dispatch(login(createdUser));
          navigate("/");
        }
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <Navbar/>
      <div className="flex min-h-screen bg-gray-100 items-center justify-center py-4 sm:px-6 lg:px-8 relative">
        <div className="flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
          {/* Left Section (Hidden on mobile screens) */}
          <div className="hidden lg:flex flex-col justify-between w-1/2 bg-blue-600 p-10 text-white">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Join Us and Unlock Endless Possibilities!
              </h1>
              <p className="text-lg mb-8">
                Welcome to <span className="font-bold">Himalayan Sikshya</span>,
                where your journey begins. Sign up now to access exclusive
                features, personalized recommendations, and seamless user
                experience.
              </p>
            </div>

            {/* Testimonial */}
            <div className="mt-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
                  <img src={photo} alt="Profile" className="w-full h-full" />
                </div>
                <div className="ml-4">
                  <p className="font-bold">Biraj Baral</p>
                  <p className="text-sm">Founder, CEO</p>
                </div>
              </div>
              <p className="text-sm">
                "We love <span className="font-bold">Himalayan Sikshya</span>!
                It's the best platform to learn any new skills. You can learn
                anything from anywhere. You can get help in your assignments and
                projects. You can also teach and earn money."
              </p>
            </div>
          </div>

          {/* Right Section - Sign up form */}
          <div className="w-full lg:w-1/2 bg-white p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Sign up to Himalayan Sikshya
            </h2>

            <form onSubmit={handleSubmit(create)}>
              <div className="mb-2">
                <Input
                  label="Your Full Name:"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  {...register("name", { required: true })}
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
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address must be a valid address",
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

              {error && (
                <p className="text-red-600 mt-4 text-center">{error}</p>
              )}

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
              <a href="#" className="text-blue-600 underline">
                Log in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
