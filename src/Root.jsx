import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import MyNavbar from "./components/Navbar";

export default function Root() {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto bg-white flex flex-col">
      <MyNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
