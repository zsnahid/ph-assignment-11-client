import { Button } from "@material-tailwind/react";
import {
  PiCalendarDotsDuotone,
  PiChats,
  PiPencilSimpleLineDuotone,
} from "react-icons/pi";
import { useTheme } from "../contexts/ThemeContext";

/* eslint-disable react/prop-types */
export default function AllQueriesVerticalCard({ query }) {
  const { isDarkMode } = useTheme();
  const {
    _id,
    question,
    details,
    userName,
    productImage,
    uploadTime,
    recommendationCount,
  } = query;

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
            alt="Product image for query"
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
        <Button
          variant="outlined"
          className="flex items-center gap-2 normal-case rounded-full"
          color={isDarkMode ? "white" : "gray"}
          size="sm"
        >
          <PiChats className="h-4 w-4" /> {recommendationCount}
        </Button>

        <a href={`/query/details/${_id}`}>
          <Button
            variant="text"
            className="flex items-center gap-1 normal-case rounded-full"
            color="green"
            size="sm"
          >
            Read more
            <PiPencilSimpleLineDuotone className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
}
