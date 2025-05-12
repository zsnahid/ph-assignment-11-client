/* eslint-disable no-unused-vars */
import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import fwg from "/src/assets/auth/FWG.jpg";

export default function Signup() {
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const { isDarkMode } = useTheme();

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.user_name.value;
    const photo = form.user_photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const userInfo = { displayName: name, photoURL: photo };
    // console.log(userInfo);

    createUser(email, password)
      .then((userCredential) => {
        updateUserProfile(userInfo)
          .then()
          .catch((error) =>
            console.error("profile update error:", error.message)
          );

        //const user = userCredential.user;
        // console.log(user);
      })
      .catch((error) => {
        console.error("sign in error:", error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn();
  };

  return (
    <section
      className={`${isDarkMode ? "bg-gray-900" : "bg-white"} transition-colors`}
    >
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* large device layout */}
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-6 lg:h-full xl:col-span-6">
          <img
            src={fwg}
            className="absolute inset-0 h-full w-full object-cover brightness-90"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <img src="/social.png" className="size-20" />

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to <span className="font-serif">Qrius</span>
            </h2>

            <p className="mt-4 leading-relaxed text-white/90 w-4/5">
              Join the Community of Smart Shoppers! Get personalized
              recommendations, share your insights, and explore the best
              products
            </p>
          </div>
        </section>

        {/* small and medium device layout */}
        <main
          className={`flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12 xl:col-span-6 ${
            isDarkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className={`inline-flex size-16 items-center justify-center rounded-full ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } text-blue-600 sm:size-20`}
                href="/"
              >
                <img src="/social.png" className="size-10" />
              </a>

              <h1
                className={`mt-2 text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } sm:text-3xl md:text-4xl`}
              >
                Welcome to <span className="font-serif">Qrius</span>
              </h1>

              <p
                className={`mt-4 leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Join the Community of Smart Shoppers! Get personalized
                recommendations, share your insights, and explore the best
                products
              </p>
            </div>

            <form
              className="mt-8 grid grid-cols-6 gap-6"
              onSubmit={handleEmailSignIn}
            >
              <div className="col-span-6">
                <label
                  htmlFor="user_name"
                  className={`block text-sm font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className={`mt-1 w-full rounded-full shadow-sm ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-200 text-gray-700"
                  }`}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="user_photo"
                  className={`block text-sm font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Photo
                </label>

                <input
                  type="text"
                  id="user_photo"
                  name="user_photo"
                  placeholder="Image URL"
                  className={`mt-1 w-full rounded-full shadow-sm ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-200 text-gray-700"
                  }`}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`mt-1 w-full rounded-full shadow-sm ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-200 text-gray-700"
                  }`}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`mt-1 w-full rounded-full shadow-sm ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-200 text-gray-700"
                  }`}
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className={`size-5 rounded-md shadow-sm ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-white border-gray-200"
                    }`}
                  />

                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    I want to receive emails about events, product updates and
                    company announcements
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  By creating an account, you agree to our{" "}
                  <a
                    href="#"
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } underline hover:text-primary`}
                  >
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } underline hover:text-primary`}
                  >
                    privacy policy
                  </a>
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button
                  type="submit"
                  color="green"
                  className="w-full lg:w-1/2 text-sm font-medium normal-case rounded-full"
                  size="lg"
                >
                  Sign Up
                </Button>

                <p
                  className={`mt-4 text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  } text-center sm:mt-0`}
                >
                  Already have an account?{" "}
                  <a
                    href="/loginpage"
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } underline hover:text-primary`}
                  >
                    Log in
                  </a>
                </p>
              </div>
            </form>
            <span className="relative flex justify-center my-2">
              <div
                className={`absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent ${
                  isDarkMode ? "via-gray-600" : "via-gray-500"
                } to-transparent opacity-75`}
              ></div>

              <span
                className={`relative z-10 ${
                  isDarkMode ? "bg-gray-900" : "bg-white"
                } px-6 ${isDarkMode ? "text-gray-300" : "text-gray-900"}`}
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
                  ? "text-gray-300 border-gray-600"
                  : "text-gray-600 border-gray-600"
              } mb-2 lg:w-fit mx-auto hover:opacity-80`}
              onClick={handleGoogleSignIn}
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="size-4"
              />
              Continue with Google
            </Button>
          </div>
        </main>
      </div>
    </section>
  );
}
