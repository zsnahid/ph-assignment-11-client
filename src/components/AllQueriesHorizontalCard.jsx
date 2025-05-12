/* eslint-disable react/prop-types */

import { Button } from "@material-tailwind/react";
import { PiCalendarDotsDuotone, PiChats } from "react-icons/pi";
import { useTheme } from "../contexts/ThemeContext";

export default function AllQueriesHorizontalCard({ query }) {
  const { isDarkMode } = useTheme();

  const {
    _id,
    productImage,
    question,
    details,
    userName,
    userImage,
    uploadTime,
    recommendationCount,
  } = query;

  return (
    <article
      className={`rounded-xl border-2 ${
        isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-100 bg-white"
      }`}
    >
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <span className="block shrink-0">
          <img
            alt={`Profile picture of ${userName}`}
            src={userImage}
            className="size-14 rounded-lg object-cover"
          />
        </span>

        <div className="mr-8">
          <h3 className="font-medium sm:text-lg">
            <a
              href={`/query/details/${_id}`}
              className={`underline ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {question}
            </a>
          </h3>

          <div className="mb-2 sm:flex sm:items-center sm:gap-4">
            <p
              className={`hidden sm:block sm:text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Posted by{" "}
              <span
                className={`font-medium underline hover:text-gray-300 ${
                  isDarkMode ? "text-gray-300" : "hover:text-gray-700"
                }`}
              >
                {userName}{" "}
              </span>
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

          <a href={`/query/details/${_id}`}>
            <Button
              variant="outlined"
              className="flex items-center gap-2 normal-case rounded-full"
              color={isDarkMode ? "white" : "gray"}
              size="sm"
            >
              <PiChats className="h-4 w-4" />
              {recommendationCount}
            </Button>
          </a>
        </div>

        <div className="">
          <img
            src={productImage}
            alt="Product image for query"
            className="w-96 h-44 object-cover object-center rounded-xl border border-gray-200"
          />
        </div>
      </div>
    </article>
  );
}
