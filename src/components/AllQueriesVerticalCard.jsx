import {
  PiCalendarDotsDuotone,
  PiChats,
  PiPencilSimpleLineDuotone,
} from "react-icons/pi";
import MyIconButton from "./MyIconButton";

/* eslint-disable react/prop-types */
export default function AllQueriesVerticalCard({ query }) {
  // console.log(query);
  const {
    _id,
    productName,
    question,
    details,
    userName,
    productImage,
    uploadTime,
    recommendationCount,
  } = query;

  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-300 p-4 sm:p-6 lg:p-8 flex flex-col">
      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {question}
          </h3>

          <div className="mt-1 text-xs font-medium text-gray-500 flex gap-2">
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

      <p className="mb-2">Product in the image: {productName}</p>

      <div className="mt-4">
        <p className="text-pretty text-sm text-gray-600 line-clamp-2">
          {details}
        </p>
      </div>

      <div className="mt-6 text-xs font-medium text-gray-500 flex gap-4  flex-grow">
        <p className="flex items-center gap-1">
          <PiPencilSimpleLineDuotone className="text-base" />
          {recommendationCount} Recommendations
        </p>
      </div>

      <a href={`/query/details/${_id}`}>
        <button className="mt-4">
          <MyIconButton
            icon={<PiChats />}
            text={recommendationCount}
          />
        </button>
      </a>
    </div>
  );
}
