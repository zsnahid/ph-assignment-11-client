import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { PiGridFourDuotone, PiRowsDuotone } from "react-icons/pi";
import { useLoaderData } from "react-router-dom";
import MyIconButton from "../components/MyIconButton";
import AllQueriesHorizontalLayout from "../layouts/AllQueriesHorizontalLayout";
import AllQueriesVerticalLayout from "../layouts/AllQueriesVerticalLayout";

export default function Queries() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [layout, setLayout] = useState("list");
  const data = useLoaderData();
  const [queries, setQueries] = useState(data);
  // console.log(queries);
  const handleToggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLayoutChange = (selectedLayout) => {
    setLayout(selectedLayout);
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.Search.value;
    // console.log(searchText);

    axios
      .get(
        `http://localhost:3000/queries/search?product=${encodeURIComponent(
          searchText
        )}`,
        { searchText }
      )
      .then((res) => {
        setQueries(res.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex-grow max-w-screen-2xl w-11/12 mx-auto">
      {/* search box */}

      <div className="relative my-4 lg:w-3/5 mx-auto">
        <form onSubmit={handleSearch}>
          <label
            htmlFor="Search"
            className="sr-only"
          >
            {" "}
            Search{" "}
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search by title or product name"
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button
              type="submit"
              className="text-gray-600 hover:text-gray-700"
            >
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </form>
      </div>

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
        <AllQueriesVerticalLayout
          queries={queries}
          setQueries={setQueries}
        />
      ) : (
        <AllQueriesHorizontalLayout
          queries={queries}
          setQueries={setQueries}
        />
      )}
    </div>
  );
}
