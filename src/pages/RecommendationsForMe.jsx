import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

const TABLE_HEAD = ["Query", "Recommended Product", "Recommended By", ""];

export default function RecommendationsForMe() {
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://ph-assignment-11-server-ten.vercel.app/recommendations/questioner/filter?email=${encodeURIComponent(
          user.email
        )}`,
        { withCredentials: true }
      )
      .then((res) => {
        setTableRows(res.data);
      })
      .catch((error) => console.error(error));
  }, [user.email]);

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
          {tableRows.map(
            ({
              _id,
              queryTitle,
              queryId,
              recommendedProductName,
              recommenderName,
            }) => (
              <tr key={_id}>
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
                    {recommenderName}
                  </Typography>
                </td>
                <td
                  className={`p-4 ${
                    isDarkMode ? "border-b border-gray-800" : ""
                  }`}
                >
                  <Typography
                    as="a"
                    href={`/query/details/${queryId}`}
                    variant="small"
                    className={`font-medium underline ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
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
