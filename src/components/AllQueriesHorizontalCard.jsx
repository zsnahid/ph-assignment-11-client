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
      <div className="flex flex-col md:flex-row gap-4 p-4 sm:p-6">
        {/* User Image - Always visible */}
        <div className="flex-shrink-0">
          <img
            alt={`Profile picture of ${userName}`}
            src={userImage}
            className="size-12 md:size-14 rounded-lg object-cover"
          />
        </div>

        {/* Content Section - Grows to fill available space */}
        <div className="flex-grow space-y-3">
          {/* Question Title */}
          <h3 className="font-medium text-base sm:text-lg">
            <a
              href={`/query/details/${_id}`}
              className={`hover:underline ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {question}
            </a>
          </h3>

          {/* User Info & Timestamp */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <p
              className={`text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Posted by{" "}
              <span
                className={`font-medium hover:underline ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {userName}
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

          {/* Query Details - Hidden on mobile, visible on larger screens */}
          <p
            className={`line-clamp-2 text-sm hidden sm:block ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {details}
          </p>

          {/* Recommendations Button */}
          <div className="pt-1">
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
        </div>

        {/* Product Image - Responsive width, full width on mobile */}
        <div className="mt-3 md:mt-0 md:ml-2 flex-shrink-0 md:max-w-xs lg:max-w-sm">
          <img
            src={productImage}
            alt="Product image for query"
            className="w-full h-40 lg:w-64 sm:h-44 object-cover object-center rounded-xl border border-gray-200"
          />
        </div>
      </div>
    </article>
  );
}
