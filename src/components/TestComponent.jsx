import React from 'react';

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        {/* Left Section (Hidden on mobile screens) */}
        <div className="hidden lg:block w-1/2 bg-blue-600 p-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Join Us and Unlock Endless Possibilities!</h1>
          <p className="text-lg mb-8">
            Welcome to <span className="font-bold">Creativo</span>, where your journey begins. Sign up now to access exclusive features,
            personalized recommendations, and seamless user experience.
          </p>
          
          {/* Testimonial */}
          <div className="mt-10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-full h-full" />
              </div>
              <div className="ml-4">
                <p className="font-bold">Jame Doe</p>
                <p className="text-sm">Co-Founder, Design.co</p>
              </div>
            </div>
            <p className="text-sm">
              "We love <span className="font-bold">Creativo</span>! Our designers were using it for their projects, so we already knew
              what kind of design they want."
            </p>
          </div>
        </div>

        {/* Right Section - Sign up form */}
        <div className="w-full lg:w-1/2 bg-white p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign up to Creativo</h2>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Your Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Full Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Your Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Email Address"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Create a Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Create a Password"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Confirm Your Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Confirm Your Password"
              />
            </div>

            <div className="mb-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                By signing up, you agree to our{' '}
                <a href="#" className="text-blue-600 underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>.
              </label>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Create Account
            </button>

            <div className="my-6 text-center text-gray-500">Or</div>

            <button className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
              <img src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="Google" className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500 text-center">
            Already a member?{' '}
            <a href="#" className="text-blue-600 underline">
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
