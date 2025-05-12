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
      className={`rounded-xl border-2 ${
        isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-100 bg-white"
      }`}
    >
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <span className="block shrink-0">
          <img
            alt=""
            src={userImage}
            className="size-14 rounded-lg object-cover"
          />
        </span>

        <div className="mr-8">
          <h3
            className={`font-medium sm:text-lg ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <a href={`/query-details/${_id}`} className="hover:underline">
              {question}
            </a>
          </h3>

          <div className="mb-2 sm:flex sm:items-center sm:gap-4">
            <p
              className={`hidden sm:block sm:text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Posted by <span className="font-medium">{userName} </span>
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
            className={`line-clamp-2 text-sm hidden lg:block ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {details}
          </p>

          <div className="mt-4 flex flex-col lg:flex-row items-center gap-2">
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

        <div className="">
          <img
            src={productImage}
            className="w-96 h-44 object-cover object-center rounded-xl border border-gray-200"
          />
        </div>
      </div>
    </article>
  );
}
