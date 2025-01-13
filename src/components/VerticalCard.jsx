import {
  PiArticleDuotone,
  PiCalendarDotsDuotone,
  PiCaretCircleDoubleUpDuotone,
  PiChats,
  PiPencilSimpleLineDuotone,
  PiTrashDuotone,
} from "react-icons/pi";
import MyIconButton from "./MyIconButton";

/* eslint-disable react/prop-types */
export default function VerticalCard({ query }) {
  console.log(query);
  const {
    question,
    details,
    userName,
    userImage,
    uploadTime,
    recommendationCount,
  } = query;

  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 flex flex-col">
      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {question}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">
            By {userName}
          </p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt=""
            src={userImage}
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-pretty text-sm text-gray-500 line-clamp-2">
          {details}
        </p>
      </div>

      <div className="mt-6 flex-grow flex gap-4 sm:gap-6">
        <p className="hidden sm:flex sm:items-center sm:gap-1 sm:text-sm sm:text-gray-500">
          <PiCalendarDotsDuotone className="text-base" />
          {uploadTime}
        </p>

        <p className="hidden sm:flex sm:items-center sm:gap-1 sm:text-sm sm:text-gray-500">
          <PiPencilSimpleLineDuotone className="text-base" />
          {recommendationCount}
        </p>

        <p className="hidden sm:flex sm:items-center sm:gap-1 sm:text-sm sm:text-gray-500">
          <PiChats className="text-base" />0
        </p>
      </div>

      <div className="flex gap-2 mt-4">
        <button className="">
          <MyIconButton
            icon={<PiArticleDuotone />}
            text={"Details"}
          />
        </button>

        <button className="">
          <MyIconButton
            icon={<PiCaretCircleDoubleUpDuotone />}
            text={"Update"}
          />
        </button>

        <button className="">
          <MyIconButton
            icon={<PiTrashDuotone />}
            text={"Delete"}
          />
        </button>
      </div>
    </div>
  );
}
