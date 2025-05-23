import { Button, Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

const TABLE_HEAD = ["Query", "Recommended Product", "Asked By", ""];

export default function MyRecommendations() {
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://ph-assignment-11-server-ten.vercel.app/recommendations/recommender/filter?email=${encodeURIComponent(
          user.email
        )}`,
        { withCredentials: true }
      )
      .then((res) => {
        setTableRows(res.data);
      })
      .catch((error) => console.error(error));
  }, [user.email]);

  const handleDeleteRecommendations = (_id, queryId) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://ph-assignment-11-server-ten.vercel.app/recommendations/delete/${_id}`
          )
          .then((response) => {
            if (response.data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your recommendations has been deleted.",
                icon: "success",
                confirmButtonColor: "#689f38",
              });

              axios
                .patch(
                  `https://ph-assignment-11-server-ten.vercel.app/queries/decrement/${queryId}`,
                  {
                    _id,
                  }
                )
                .then()
                .catch((error) => console.error(error));

              const remainingRows = tableRows.filter(
                (recommendation) => recommendation._id !== _id
              );
              setTableRows(remainingRows);
            }
          })
          .catch((error) => console.error(error));
      }
    });
  };

  return (
    <Card
      className={`flex-grow min-h-[60vh] w-full rounded-none overflow-auto shadow-none mt-4 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className={`border-b p-4 ${
                  isDarkMode
                    ? "border-gray-700 bg-gray-800/50"
                    : "border-gray-300/50 bg-gray-300/50"
                }`}
              >
                <Typography
                  variant="small"
                  className={`font-normal leading-none opacity-70 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows?.map(
            ({
              _id,
              queryTitle,
              queryId,
              recommendedProductName,
              questionerName,
            }) => (
              <tr key={_id} className="even:bg-gray-300/50">
                <td
                  className={`p-4 ${
                    isDarkMode ? "border-b border-gray-800" : ""
                  }`}
                >
                  <Typography
                    variant="small"
                    className={`font-normal ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {queryTitle}
                  </Typography>
                </td>
                <td
                  className={`p-4 ${
                    isDarkMode ? "border-b border-gray-800" : ""
                  }`}
                >
                  <Typography
                    variant="small"
                    className={`font-normal ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {recommendedProductName}
                  </Typography>
                </td>
                <td
                  className={`p-4 ${
                    isDarkMode ? "border-b border-gray-800" : ""
                  }`}
                >
                  <Typography
                    variant="small"
                    className={`font-normal ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {questionerName}
                  </Typography>
                </td>
                <td
                  className={`p-4 ${
                    isDarkMode ? "border-b border-gray-800" : ""
                  }`}
                >
                  <button
                    onClick={() => handleDeleteRecommendations(_id, queryId)}
                  >
                    <Button
                      variant="outlined"
                      className="flex items-center gap-2 normal-case"
                      color="red"
                      size="sm"
                    >
                      <RiDeleteBinLine className="h-4 w-4" /> Delete
                    </Button>
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
}
