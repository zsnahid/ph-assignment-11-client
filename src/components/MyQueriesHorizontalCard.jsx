/* eslint-disable react/prop-types */

import axios from "axios";
import { GrDocumentUpdate } from "react-icons/gr";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import MyIconButton from "./MyIconButton";


export default function MyQueriesHorizontalCard({
  query,
  queries,
  setQueries,
}) {
  // console.log(query);
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
          .delete(`http://localhost:3000/queries/${_id}`)
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
              Posted by <span className="font-medium">{userName} </span>
            </p>

            <div className="flex items-center gap-1 text-gray-500">
              <PiCalendarDotsDuotone />
              <p className="text-xs">{uploadTime}</p>
            </div>
          </div>

          <p className="line-clamp-2 text-sm text-gray-700 hidden lg:block">
            {details}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <a href={`/query/details/${_id}`}>
              <button>
                <MyIconButton
                  icon={<TbListDetails />}
                  text={"Details"}
                />
              </button>
            </a>
            <a href={`/query/update/${_id}`}>
              <button>
                <MyIconButton
                  icon={<GrDocumentUpdate />}
                  text={"Update"}
                />
              </button>
            </a>
            <button onClick={handleDeleteQuery}>
              <MyIconButton
                icon={<RiDeleteBinLine />}
                text={"Delete"}
              />
            </button>
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
