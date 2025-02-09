import axios from "axios";
import { GrDocumentUpdate } from "react-icons/gr";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import MyIconButton from "./MyIconButton";

/* eslint-disable react/prop-types */
export default function MyQueriesVerticalCard({ query, queries, setQueries }) {
  // console.log(query);
  const {
    _id,
    question,
    details,
    userName,
    productImage,
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

      <div className="mt-4">
        <p className="text-pretty text-sm text-gray-600 line-clamp-2">
          {details}
        </p>
      </div>

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
  );
}
