import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import MyNavbar from "./components/Navbar";

export default function Root() {
  return (
    <div className="max-w-screen-2xl mx-auto bg-gray-100">
      <MyNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
