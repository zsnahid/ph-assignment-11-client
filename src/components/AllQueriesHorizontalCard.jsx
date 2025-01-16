/* eslint-disable react/prop-types */

import { PiCalendarDotsDuotone, PiChats } from "react-icons/pi";
import MyIconButton from "./MyIconButton";

/*
{
    "_id": "6783894c4ee67f025257bba4",
    "productName": "Alienware m15 R7",
    "productBrand": "Alienware",
    "productImage": "https://i.ibb.co.com/48TdtXT/dell-xps-15.jpg",
    "question": "What’s the best gaming laptop under $1500?",
    "details": "I’m looking for a powerful gaming laptop that can handle the latest AAA games with high settings. It should have a fast refresh rate, good cooling, and a reliable GPU for long gaming sessions. Portability is a bonus, but I am okay with a slightly bulky design if the performance is worth it. Any recommendations for something that balances price and features?",
    "userName": "Steve Smith",
    "userEmail": "smith@yahoo.com",
    "userImage": "https://i.ibb.co.com/2Wnfp7P/headshot.jpg",
    "uploadTime": "1/12/2025, 3:20:12 PM",
    "recommendationCount": 0
}
*/
export default function AllQueriesHorizontalCard({ query }) {
  console.log(query);
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
    <article className="rounded-xl border-2 border-gray-100 bg-white">
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <span className="block shrink-0">
          <img
            alt=""
            src={userImage}
            className="size-14 rounded-lg object-cover"
          />
        </span>

        <div className="mr-8">
          <h3 className="font-medium sm:text-lg">
            <a
              href={`/query-details/${_id}`}
              className="hover:underline"
            >
              {question}
            </a>
          </h3>

          <div className="mb-2 sm:flex sm:items-center sm:gap-4">
            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
              Posted by{" "}
              <a
                href="#"
                className="font-medium underline hover:text-gray-700"
              >
                {userName}{" "}
              </a>
            </p>

            <div className="flex items-center gap-1 text-gray-500">
              <PiCalendarDotsDuotone />
              <p className="text-xs">{uploadTime}</p>
            </div>
          </div>

          <p className="line-clamp-2 text-sm text-gray-700 hidden lg:block">
            {details}
          </p>

          <a href={`/query/details/${_id}`}>
            <button className="mt-4">
              <MyIconButton
                icon={<PiChats />}
                text={recommendationCount}
              />
            </button>
          </a>
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
