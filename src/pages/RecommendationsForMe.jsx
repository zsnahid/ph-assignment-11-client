import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const TABLE_HEAD = ["Query", "Recommended Product", "Recommended By", ""];

export default function RecommendationsForMe() {
  const { user } = useContext(AuthContext);
  const [tableRows, setTableRows] = useState([]);
  // console.log(user);

  useEffect(() => {
    axios
      .get(
        `https://ph-assignment-11-server-ten.vercel.app/recommendations/questioner/filter?email=${encodeURIComponent(
          user.email
        )}`,
        { withCredentials: true }
      )
      .then((res) => {
        // console.log(res.data);
        setTableRows(res.data);
      })
      .catch((error) => console.error(error));
  }, [user.email]);

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
          {tableRows.map(
            ({
              _id,
              queryTitle,
              queryId,
              recommendedProductName,
              recommenderName,
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
                    {recommenderName}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href={`/query/details/${queryId}`}
                    variant="small"
                    color="blue-gray"
                    className="font-medium underline"
                  >
                    Details
                  </Typography>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
}
