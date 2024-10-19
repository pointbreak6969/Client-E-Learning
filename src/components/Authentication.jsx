import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import photo from "../assets/photo.jpg";

const Authentication = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="flex min-h-fit  items-center justify-center py-10 sm:px-6 lg:px-8 relative">
          <div className="flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
            {/* Left Section (Hidden on mobile screens) */}
            <div className="hidden lg:flex flex-col justify-between w-1/2 bg-blue-600 p-10 text-white">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  Join Us and Unlock Endless Possibilities!
                </h1>
                <p className="text-lg mb-8">
                  Welcome to{" "}
                  <span className="font-bold">Himalayan Sikshya</span>, where
                  your journey begins. Sign up now to access exclusive features,
                  personalized recommendations, and seamless user experience.
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
                  anything from anywhere. You can get help in your assignments
                  and projects. You can also teach and earn money."
                </p>
              </div>
            </div>

            {/* Right Section - Dynamic */}
            <div className="w-full lg:w-1/2 bg-white p-8 sm:p-10">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
