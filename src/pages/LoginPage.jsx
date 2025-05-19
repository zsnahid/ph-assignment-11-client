/* eslint-disable react/no-unescaped-entities */
import { Button } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import fwg from "/src/assets/auth/FWG.jpg";
import lwg from "/src/assets/auth/NWD.jpg";

const LoginPage = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.login_email.value;
    const password = form.login_password.value;

    logIn(email, password)
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Successfully logged in!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Successfully logged in with Google!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row lg:min-h-[calc(100vh-220px)] mt-20 mb-20 w-11/12 mx-auto">
      {/* Left side - Hero content */}
      <div className="lg:w-1/2 p-8 pb-0 hidden lg:flex flex-col justify-center text-center">
        {/* Main heading section */}
        <div className="max-w-lg">
          <span
            className={`text-sm font-semibold uppercase ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            LARGEST Q&A PLATFORM
          </span>
          <h1
            className={`mt-4 text-5xl sm:text-6xl font-bold tracking-tight ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            POWERED BY ENTHUSIASTS AROUND THE WORLD.
            <span className="inline-flex items-center">
              {/* Green dots with increasing opacity */}
              <span className="ml-2 h-8 w-8 rounded-full bg-green-300"></span>
              <span className="-ml-3 h-8 w-8 rounded-full bg-green-500"></span>
              <span className="-ml-3 h-8 w-8 rounded-full bg-green-700"></span>
              <span className="-ml-3 h-8 w-8 rounded-full bg-green-900"></span>
            </span>
          </h1>

          {/* Account creation section */}
          <div className="mt-16 hidden lg:block">
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Don't have account?
            </p>
            <a
              href="/signup"
              className="mt-2 inline-flex items-center text-primary font-medium hover:text-primary/80"
            >
              Create account
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* About section at bottom */}
        <div
          style={{
            backgroundImage: `url(${lwg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          className="mt-auto text-white p-6 rounded-2xl"
        >
          <h3 className="font-medium">About us</h3>
          <p className="mt-2 text-sm text-gray-300">
            Over <span className="font-semibold">3 million</span> free answers
            brought to you by the world's most generous community of consumers.
          </p>
        </div>
      </div>

      {/* Right side - Image with login overlay */}
      <div className="lg:w-1/2 relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url(${fwg})`,
          }}
        ></div>

        {/* Login modal */}
        <div
          className={`lg:absolute top-1/2 left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 ${
            isDarkMode ? "lg:bg-gray-800" : "lg:bg-white"
          } backdrop-blur-sm rounded-3xl p-6 w-full lg:w-80 h-full lg:h-fit mx-auto`}
        >
          <form
            className={`space-y-4 bg-transparent ${
              isDarkMode ? "lg:bg-gray-800" : "lg:bg-white"
            }`}
            onSubmit={handleLogIn}
          >
            <p
              className={`text-center text-lg font-medium ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Log in to your account
            </p>

            <div>
              <label htmlFor="login_email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  id="login_email"
                  name="login_email"
                  className={`w-full rounded-full p-4 pe-12 text-sm shadow-sm ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`size-4 ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="login_password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="login_password"
                  name="login_password"
                  className={`w-full rounded-full p-4 pe-12 text-sm shadow-sm ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Enter password"
                />

                <button
                  type="button"
                  className="absolute inset-y-0 end-0 grid place-content-center px-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`size-4 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`size-4 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="w-full">
              <Button
                color="green"
                className="w-full text-sm font-medium normal-case rounded-full"
                size="lg"
              >
                Log In
              </Button>
            </button>
          </form>
          <span className="relative flex justify-center my-2">
            <div
              className={`absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent ${
                isDarkMode ? "via-gray-400" : "via-gray-500"
              } to-transparent opacity-75`}
            ></div>

            <span
              className={`relative z-10 ${
                isDarkMode ? "lg:bg-gray-800" : "lg:bg-white"
              } text-white lg:text-inherit px-6`}
            >
              or
            </span>
          </span>

          <Button
            size="md"
            fullWidth
            variant="outlined"
            className={`flex justify-center items-center gap-3 rounded-full ${
              isDarkMode
                ? "text-white border-gray-500"
                : "text-white border-gray-500 lg:text-gray-600 lg:border-gray-600"
            } mb-2`}
            onClick={handleGoogleSignIn}
          >
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="metamask"
              className="size-4"
            />
            Continue with Google
          </Button>

          <div className="mt-4 text-center lg:hidden">
            <p className="text-gray-300">Don't have account?</p>
            <a
              href="/signup"
              className="mt-2 inline-flex items-center text-primary font-medium hover:text-primary/80"
            >
              Create account
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
