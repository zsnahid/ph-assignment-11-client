import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { PiGridFourDuotone, PiRowsDuotone } from "react-icons/pi";
import MyIconButton from "../components/MyIconButton";
import AllQueriesHorizontalLayout from "../layouts/AllQueriesHorizontalLayout";
import AllQueriesVerticalLayout from "../layouts/AllQueriesVerticalLayout";

export default function Queries() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [layout, setLayout] = useState("list");
  // console.log(queries);
  const handleToggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLayoutChange = (selectedLayout) => {
    setLayout(selectedLayout);
    setMenuOpen(false);
  };
  return (
    <div className="flex-grow max-w-screen-2xl w-11/12 mx-auto">
      <div className="border-b border-gray-300 py-2 flex justify-between items-center">
        <Typography variant="h3">All Queries</Typography>

        {/* dropdown */}
        <div className="relative">
          <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
            <Typography
              variant="small"
              className="border-e px-4 py-2 text-gray-600 "
            >
              Layout
            </Typography>

            <button
              className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
              onClick={handleToggleDropdown}
            >
              <span className="sr-only">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {menuOpen && (
            <div
              className="absolute end-0 z-10 mt-2 w-36 rounded-md border border-gray-100 bg-white shadow-lg"
              role="menu"
            >
              <div className="p-2 space-y-2">
                <button
                  role="menuitem"
                  className="w-full"
                  onClick={() => handleLayoutChange("grid")}
                >
                  <MyIconButton
                    icon={<PiGridFourDuotone />}
                    text={"Grid"}
                  />
                </button>
                <button
                  role="menuitem"
                  className="w-full"
                  onClick={() => handleLayoutChange("list")}
                >
                  <MyIconButton
                    icon={<PiRowsDuotone />}
                    text={"List"}
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {layout === "grid" ? (
        <AllQueriesVerticalLayout />
      ) : (
        <AllQueriesHorizontalLayout />
      )}
    </div>
  );
}
