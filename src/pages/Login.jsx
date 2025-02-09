/* eslint-disable react/no-unescaped-entities */
import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import MySolidButton from "../components/MySolidButton";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const { logIn, googleSignIn } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.login_email.value;
    const password = form.login_password.value;
    // console.log(email, password);

    logIn(email, password)
      .then()
      .catch((error) => console.error(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn();
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg bg-white rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <form
          className="mb-0 mt-6 space-y-4"
          onSubmit={handleLogIn}
        >
          <p className="text-center text-lg font-medium">
            Log in to your account
          </p>

          <div>
            <label
              htmlFor="login_email"
              className="sr-only"
            >
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                id="login_email"
                name="login_email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
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
            <label
              htmlFor="login_password"
              className="sr-only"
            >
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                id="login_password"
                name="login_password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
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
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full"
          >
            <MySolidButton>{"Log In"}</MySolidButton>
          </button>
        </form>
        <span className="relative flex justify-center my-2">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span className="relative z-10 bg-white px-6">or</span>
        </span>

        <Button
          size="md"
          fullWidth
          variant="outlined"
          color="gray"
          className="flex justify-center items-center gap-3 text-gray-600 border-gray-600 mb-2"
          onClick={handleGoogleSignIn}
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="size-4"
          />
          Continue with Google
        </Button>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            className="underline"
            href="/signup"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
