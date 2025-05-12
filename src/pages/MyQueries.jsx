import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { PiGridFourDuotone, PiRowsDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import MyQueriesHorizontalLayout from "../layouts/MyQueriesHorizontalLayout";
import MyQueriesVerticalLayout from "../layouts/MyQueriesVerticalLayout";

export default function MyQueries() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [layout, setLayout] = useState("list");

  const handleToggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLayoutChange = (selectedLayout) => {
    setLayout(selectedLayout);
    setMenuOpen(false);
  };

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto">
      <section className="relative bg-[url('/src/assets/waves.svg')] bg-cover bg-center bg-no-repeat rounded-2xl h-[80vh] shadow-xl my-10">
        {/* <div className="absolute inset-0 z-10 bg-black/30 rounded-2xl"></div> */}
        <div className="absolute z-20 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-center">
          <Typography className="font-bold text-black text-3xl">
            Ask the Community
          </Typography>
          <Typography variant="paragraph" className="text-gray-900">
            Meet other Better Buy users like you. Get answers & discover new
            ways to use Better Buy.
          </Typography>
          <Link to={"/add-query"}>
            <Button
              className="w-44 mt-4 normal-case rounded-md"
              size="lg"
              color="green"
            >
              Add Query
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <div className="border-b border-gray-300 pb-2 flex justify-between items-center">
          <Typography variant="h3">My Queries</Typography>

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
                  <Button
                    variant="outlined"
                    className="flex items-center gap-2 normal-case w-full"
                    color="gray"
                    size="sm"
                    onClick={() => handleLayoutChange("grid")}
                  >
                    <PiGridFourDuotone className="h-4 w-4" /> Grid
                  </Button>
                  <Button
                    variant="outlined"
                    className="flex items-center gap-2 normal-case w-full"
                    color="gray"
                    size="sm"
                    onClick={() => handleLayoutChange("list")}
                  >
                    <PiRowsDuotone className="h-4 w-4" /> List
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        {layout === "grid" ? (
          <MyQueriesVerticalLayout />
        ) : (
          <MyQueriesHorizontalLayout />
        )}
      </section>
    </div>
  );
}
