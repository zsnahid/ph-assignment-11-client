import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useTheme } from "../contexts/ThemeContext";

export default function UpdateQuery() {
  const query = useLoaderData();
  const { isDarkMode } = useTheme();

  const { _id, productName, productBrand, productImage, question, details } =
    query;

  const handleUpdateQuery = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.product_name.value;
    const productBrand = form.product_brand.value;
    const productImage = form.product_image.value;
    const question = form.question.value;
    const details = form.details.value;
    const time = new Date().toLocaleString();

    const updatedQuery = {
      productName,
      productBrand,
      productImage,
      question,
      details,
      uploadTime: time,
    };

    axios
      .patch(
        `https://ph-assignment-11-server-ten.vercel.app/queries/update/${_id}`,
        updatedQuery
      )
      .then((response) => {
        if (response.data.modifiedCount) {
          Swal.fire({
            title: "Query Updated",
            icon: "success",
          });
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <Card
      className={`my-10 w-fit mx-auto p-8 ${isDarkMode ? "bg-gray-800" : ""}`}
    >
      <Typography
        variant="h4"
        className={isDarkMode ? "text-white" : "text-blue-gray-900"}
      >
        Make New Changes
      </Typography>
      <form
        className="mt-8 mb-2 w-80 md:w-[30rem] lg:w-[36rem]"
        onSubmit={handleUpdateQuery}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            className={`-mb-3 ${
              isDarkMode ? "text-gray-300" : "text-blue-gray-900"
            }`}
          >
            Product Name
          </Typography>
          <Input
            size="lg"
            id="product_name"
            name="product_name"
            defaultValue={productName}
            className={`rounded-full !border-t-blue-gray-200 focus:!border-t-gray-900 ${
              isDarkMode ? "!text-white" : ""
            }`}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            className={`-mb-3 ${
              isDarkMode ? "text-gray-300" : "text-blue-gray-900"
            }`}
          >
            Brand
          </Typography>
          <Input
            size="lg"
            id="product_brand"
            name="product_brand"
            defaultValue={productBrand}
            className={`rounded-full !border-t-blue-gray-200 focus:!border-t-gray-900 ${
              isDarkMode ? "!text-white" : ""
            }`}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            className={`-mb-3 ${
              isDarkMode ? "text-gray-300" : "text-blue-gray-900"
            }`}
          >
            Image
          </Typography>
          <Input
            size="lg"
            id="product_image"
            name="product_image"
            defaultValue={productImage}
            className={`rounded-full !border-t-blue-gray-200 focus:!border-t-gray-900 ${
              isDarkMode ? "!text-white" : ""
            }`}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            className={`-mb-3 ${
              isDarkMode ? "text-gray-300" : "text-blue-gray-900"
            }`}
          >
            Question
          </Typography>
          <Input
            size="lg"
            id="question"
            name="question"
            defaultValue={question}
            className={`rounded-full !border-t-blue-gray-200 focus:!border-t-gray-900 ${
              isDarkMode ? "!text-white" : ""
            }`}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            className={`-mb-3 ${
              isDarkMode ? "text-gray-300" : "text-blue-gray-900"
            }`}
          >
            Details
          </Typography>
          <Textarea
            id="details"
            name="details"
            defaultValue={details}
            className={`rounded-xl !border-t-blue-gray-200 focus:!border-t-gray-900 ${
              isDarkMode ? "!text-white" : ""
            }`}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex place-content-end mt-4">
          <Button
            type="submit"
            color={isDarkMode ? "white" : "green"}
            className="text-sm font-medium normal-case rounded-full"
            size="lg"
          >
            Update
          </Button>
        </div>
      </form>
    </Card>
  );
}
