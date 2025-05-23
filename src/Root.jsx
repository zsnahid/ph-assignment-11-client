import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import MyNavbar from "./components/Navbar";
import { useTheme } from "./contexts/ThemeContext.jsx";

export default function Root() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen max-w-screen-2xl mx-auto flex flex-col ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      } `}
    >
      <MyNavbar />
      <div className="pt-20 lg:pt-16 flex-grow min-h-[calc(100vh-80px)]">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
      />
    </div>
  );
}
