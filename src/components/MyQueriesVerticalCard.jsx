import { Button } from "@material-tailwind/react";
import axios from "axios";
import { GrDocumentUpdate } from "react-icons/gr";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import { useTheme } from "../contexts/ThemeContext";

/* eslint-disable react/prop-types */
export default function MyQueriesVerticalCard({ query, queries, setQueries }) {
  const { isDarkMode } = useTheme();
  const { _id, question, details, userName, productImage, uploadTime } = query;

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
    <div
      className={`relative overflow-hidden rounded-lg border p-4 sm:p-6 lg:p-8 flex flex-col ${
        isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"
      }`}
    >
      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3
            className={`text-lg font-bold sm:text-xl ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {question}
          </h3>

          <div
            className={`mt-1 text-xs font-medium flex gap-2 ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <p>By {userName}</p>
            <p className="flex items-center gap-1">
              <PiCalendarDotsDuotone />
              {uploadTime}
            </p>
          </div>
        </div>

        <div className="hidden lg:block lg:shrink-0">
          <img
            alt=""
            src={productImage}
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <p
          className={`text-pretty text-sm line-clamp-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {details}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
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
  );
}
