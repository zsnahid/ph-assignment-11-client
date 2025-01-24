import { Card, Input, Textarea, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import MySolidButton from "../components/MySolidButton";
import { AuthContext } from "../contexts/AuthContext";

export default function AddQuery() {
  const { user } = useContext(AuthContext);

  const handleAddQuery = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.product_name.value;
    const productBrand = form.product_brand.value;
    const productImage = form.product_image.value;
    const question = form.question.value;
    const details = form.details.value;
    const time = new Date().toLocaleString();

    const query = {
      productName,
      productBrand,
      productImage,
      question,
      details,
      userName: user.displayName,
      userEmail: user.email,
      userImage: user.photoURL,
      uploadTime: time,
      recommendationCount: 0,
    };

    axios
      .post("http://localhost:3000/queries", query)
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            title: "Query Added",
            icon: "success",
          });
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <Card className="my-10 w-fit mx-auto p-8">
      <Typography
        variant="h4"
        color="blue-gray"
      >
        Create New Query
      </Typography>
      <form
        className="mt-8 mb-2 w-80 md:w-[30rem] lg:w-[36rem]"
        onSubmit={handleAddQuery}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Product Name
          </Typography>
          <Input
            size="lg"
            id="product_name"
            name="product_name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Brand
          </Typography>
          <Input
            size="lg"
            id="product_brand"
            name="product_brand"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Image
          </Typography>
          <Input
            size="lg"
            id="product_image"
            name="product_image"
            placeholder="image url of the product"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Question
          </Typography>
          <Input
            size="lg"
            id="question"
            name="question"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Details
          </Typography>
          <Textarea
            id="details"
            name="details"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex place-content-center mt-4">
          <button type="submit">
            <MySolidButton>Add Query</MySolidButton>
          </button>
        </div>
      </form>
    </Card>
  );
}
