import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import MyNavbar from "./components/Navbar";
import { useTheme } from "./contexts/ThemeContext.jsx";

export default function Root() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen max-w-screen-2xl mx-auto flex flex-col ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      } transition-colors`}
    >
      <MyNavbar />
      <div className="pt-20 lg:pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
