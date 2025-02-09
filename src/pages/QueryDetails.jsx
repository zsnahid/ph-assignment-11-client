import { Avatar, Input, Textarea, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { useLoaderData } from "react-router-dom";
import MySolidButton from "../components/MySolidButton";
import { AuthContext } from "../contexts/AuthContext";
export default function QueryDetails() {
  const query = useLoaderData();
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  // console.log(query);
  const {
    _id,
    userEmail,
    userImage,
    userName,
    uploadTime,
    question,
    details,
    productName,
    productImage,
  } = query;
  // console.log(typeof _id, _id);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/recommendations/${_id}`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error(error));
  }, [_id]);

  // console.log(comments);

  const handleAddRecommendation = (e) => {
    e.preventDefault();
    const form = e.target;
    const recommendationTitle = form.reco_title.value;
    const recommendedProductName = form.reco_product_name.value;
    const recommendedProductImage = form.reco_product_image.value;
    const recommendationReason = form.reco_details.value;
    const time = new Date().toLocaleString();

    const recommendation = {
      recommendationTitle,
      recommendedProductName,
      recommendedProductImage,
      recommendationReason,
      recommenderName: user.displayName,
      recommenderEmail: user.email,
      recommenderImage: user.photoURL,
      recommendingTime: time,
      queryId: _id,
      queryTitle: question,
      queryProductName: productName,
      questionerEmail: userEmail,
      questionerName: userName,
    };
    // console.log(recommendation);
    // console.log({ _id });

    axios
      .post("http://localhost:3000/recommendations", recommendation)
      .then()
      .catch((error) => console.error(error));

    axios
      .patch(`http://localhost:3000/queries/increment/${_id}`, { _id })
      .then()
      .catch((error) => console.error(error));

    setComments([...comments, recommendation]);
  };

  return (
    <div className="flex-grow max-w-screen-2xl w-11/12 mx-auto py-8 grid lg:grid-cols-12 gap-14">
      <div className="lg:col-span-7">
        {/* user info */}
        <div className="flex items-center gap-4 mb-8">
          <Avatar src={userImage} />
          <div>
            <Typography variant="lead">{userName}</Typography>
            <Typography
              color="gray"
              className="flex items-center gap-2 text-xs"
            >
              <PiCalendarDotsDuotone />
              {uploadTime}
            </Typography>
          </div>
        </div>

        {/* query */}
        <div className="mb-12">
          <Typography
            variant="h4"
            className="mb-2"
          >
            {question}
          </Typography>
          <Typography
            variant="paragraph"
            color="gray"
            className="font-medium mb-4"
          >
            {details}
          </Typography>
          <img
            src={productImage}
            className="w-full h-[20rem] lg:h-[32rem] object-contain bg-white"
          />
        </div>

        <div>
          <Typography
            variant="h6"
            className="border-b border-gray-300 py-2 mb-4"
          >
            All Replies
          </Typography>

          {/* comments */}

          {comments?.map(
            ({
              _id,
              recommenderImage,
              recommenderName,
              recommendationTitle,
              recommendedProductName,
              recommendedProductImage,
              recommendationReason,
              recommendingTime,
            }) => (
              <div
                key={_id}
                className="flex gap-2 mt-4"
              >
                <Avatar
                  src={recommenderImage}
                  size="sm"
                  className="flex-none"
                />
                <div className="bg-gray-300 rounded-xl p-4">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal tracking-wide"
                  >
                    {recommenderName}
                    <span className="font-normal text-xs">
                      {" "}
                      . {recommendingTime}{" "}
                    </span>
                  </Typography>
                  <Typography
                    variant="paragraph"
                    color="gray"
                    className="font-bold tracking-wide"
                  >
                    {recommendationTitle}
                    {": "}
                    {recommendedProductName}{" "}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {recommendationReason}
                  </Typography>
                  {recommendedProductImage && (
                    <img
                      src={recommendedProductImage}
                      className="size-40 mt-2 rounded-xl object-cover"
                    />
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {/* form */}
      <div className="lg:col-span-5 bg-white px-6 py-4 rounded-lg h-fit">
        <Typography variant="h4">Recommend a product</Typography>
        <form
          className="mt-8 mb-2"
          onSubmit={handleAddRecommendation}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Recommendation Title
            </Typography>
            <Input
              size="lg"
              id="reco_title"
              name="reco_title"
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
              Product name
            </Typography>
            <Input
              size="lg"
              id="reco_product_name"
              name="reco_product_name"
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
              Product image
            </Typography>
            <Input
              size="lg"
              id="reco_product_image"
              name="reco_product_image"
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
              Reason for recommendation
            </Typography>
            <Textarea
              id="reco_details"
              name="reco_details"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="flex place-content-end mt-4">
            <button type="submit">
              <MySolidButton>Recommend</MySolidButton>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
