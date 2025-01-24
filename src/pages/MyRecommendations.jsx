import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import MyIconButton from "../components/MyIconButton";
import { AuthContext } from "../contexts/AuthContext";

const TABLE_HEAD = ["Query", "Recommended Product", "Asked By", ""];

export default function MyRecommendations() {
  const { user } = useContext(AuthContext);
  const [tableRows, setTableRows] = useState([]);
  // console.log(user);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/recommendations/recommender/filter?email=${encodeURIComponent(
          user.email
        )}`
      )
      .then((res) => {
        console.log(res.data);
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
          .delete(`http://localhost:3000/recommendations/delete/${_id}`)
          .then((response) => {
            if (response.data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your recommendations has been deleted.",
                icon: "success",
                confirmButtonColor: "#689f38",
              });

              axios
                .patch(`http://localhost:3000/queries/decrement/${queryId}`, {
                  _id,
                })
                .then((res) => console.log(res.data))
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
    <Card className="flex-grow h-full w-full rounded-none overflow-auto">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-gray-300/50 bg-gray-300/50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
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
              <tr
                key={_id}
                className="even:bg-gray-300/50"
              >
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {queryTitle}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {recommendedProductName}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {questionerName}
                  </Typography>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleDeleteRecommendations(_id, queryId)}
                  >
                    <MyIconButton
                      icon={<RiDeleteBinLine />}
                      text={"Delete"}
                    />
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
