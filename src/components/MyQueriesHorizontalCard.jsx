/* eslint-disable react/prop-types */

import { Button } from "@material-tailwind/react";
import axios from "axios";
import { GrDocumentUpdate } from "react-icons/gr";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import { useTheme } from "../contexts/ThemeContext";

export default function MyQueriesHorizontalCard({
  query,
  queries,
  setQueries,
}) {
  const { isDarkMode } = useTheme();

  const {
    _id,
    productImage,
    question,
    details,
    userName,
    userImage,
    uploadTime,
  } = query;

  const handleDeleteQuery = () => {
    Swal.fire({
      title: "Are you sure?",
      text: question,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://ph-assignment-11-server-ten.vercel.app/queries/${_id}`
          )
          .then((response) => {
            if (response.data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                confirmButtonColor: "#689f38",
              });

              const remainingQueries = queries.filter(
                (query) => query._id !== _id
              );
              setQueries(remainingQueries);
            }
          })
          .catch((error) => console.error(error));
      }
    });
  };

  return (
    <article
      className={`rounded-xl border-2 overflow-hidden ${
        isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-100 bg-white"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-4 p-4">
        {/* Left Side - User Info and Content */}
        <div className="flex flex-grow gap-4">
          {/* User Avatar */}
          <div className="shrink-0">
            <img
              alt={`${userName}'s avatar`}
              src={userImage}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3
              className={`font-medium text-base sm:text-lg mb-1 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <a href={`/query-details/${_id}`} className="hover:underline">
                {question}
              </a>
            </h3>

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <p
                className={`text-xs ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Posted by <span className="font-medium">{userName}</span>
              </p>

              <div
                className={`flex items-center gap-1 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <PiCalendarDotsDuotone />
                <p className="text-xs">{uploadTime}</p>
              </div>
            </div>

            <p
              className={`text-sm mb-4 line-clamp-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {details}
            </p>

            <div className="flex lg:gap-2">
              <a href={`/query/details/${_id}`}>
                <Button
                  variant="outlined"
                  className="flex items-center gap-2 normal-case rounded-full"
                  color={isDarkMode ? "white" : "gray"}
                  size="sm"
                >
                  <TbListDetails className="h-4 w-4" /> Details
                </Button>
              </a>
              <a href={`/query/update/${_id}`}>
                <Button
                  variant="outlined"
                  className="flex items-center gap-2 normal-case rounded-full"
                  color={isDarkMode ? "white" : "gray"}
                  size="sm"
                >
                  <GrDocumentUpdate className="h-4 w-4" /> Update
                </Button>
              </a>
              <Button
                variant="outlined"
                className="flex items-center gap-2 normal-case rounded-full"
                color="red"
                size="sm"
                onClick={handleDeleteQuery}
              >
                <RiDeleteBinLine className="h-4 w-4" /> Delete
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Product Image */}
        <div className="mt-3 md:mt-0 md:ml-2 flex-shrink-0 md:max-w-xs lg:max-w-sm">
          <img
            src={productImage}
            alt="Product"
            className="w-full lg:w-64 h-40 sm:h-44 object-cover object-center rounded-xl border border-gray-200"
          />
        </div>
      </div>
    </article>
  );
}
