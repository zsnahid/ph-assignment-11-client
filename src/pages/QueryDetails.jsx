import {
  Avatar,
  Button,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

export default function QueryDetails() {
  const query = useLoaderData();
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
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
      .get(
        `https://ph-assignment-11-server-ten.vercel.app/recommendations/${_id}`
      )
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
      .post(
        "https://ph-assignment-11-server-ten.vercel.app/recommendations",
        recommendation
      )
      .then()
      .catch((error) => console.error(error));

    axios
      .patch(
        `https://ph-assignment-11-server-ten.vercel.app/queries/increment/${_id}`,
        { _id }
      )
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
            <Typography
              variant="lead"
              className={isDarkMode ? "text-white" : ""}
            >
              {userName}
            </Typography>
            <Typography
              className={`flex items-center gap-2 text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
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
            className={`mb-2 ${isDarkMode ? "text-white" : ""}`}
          >
            {question}
          </Typography>
          <Typography
            variant="paragraph"
            className={`font-medium mb-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {details}
          </Typography>
          <img
            src={productImage}
            className={`w-full h-[20rem] lg:h-[32rem] object-contain ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          />
        </div>

        <div>
          <Typography
            variant="h6"
            className={`border-b py-2 mb-4 ${
              isDarkMode
                ? "border-gray-700 text-white"
                : "border-gray-300 text-gray-900"
            }`}
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
              <div key={_id} className="flex gap-2 mt-4">
                <Avatar
                  src={recommenderImage}
                  size="sm"
                  className="flex-none"
                />
                <div
                  className={`rounded-xl p-4 ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-300"
                  }`}
                >
                  <Typography
                    variant="small"
                    className={`font-normal tracking-wide ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {recommenderName}
                    <span
                      className={`font-normal text-xs ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {" "}
                      . {recommendingTime}{" "}
                    </span>
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className={`font-bold tracking-wide ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {recommendationTitle}
                    {": "}
                    {recommendedProductName}{" "}
                  </Typography>
                  <Typography
                    variant="small"
                    className={`font-normal ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
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
      <div
        className={`lg:col-span-5 px-6 py-4 rounded-lg h-fit ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <Typography variant="h4" className={isDarkMode ? "text-white" : ""}>
          Recommend a product
        </Typography>
        <form className="mt-8 mb-2" onSubmit={handleAddRecommendation}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              className={`-mb-3 ${
                isDarkMode ? "text-gray-300" : "text-blue-gray-900"
              }`}
            >
              Recommendation Title
            </Typography>
            <Input
              size="lg"
              id="reco_title"
              name="reco_title"
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
              Product name
            </Typography>
            <Input
              size="lg"
              id="reco_product_name"
              name="reco_product_name"
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
              Product image
            </Typography>
            <Input
              size="lg"
              id="reco_product_image"
              name="reco_product_image"
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
              Reason for recommendation
            </Typography>
            <Textarea
              id="reco_details"
              name="reco_details"
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
              className="normal-case rounded-full"
              color={isDarkMode ? "white" : "black"}
              variant="filled"
              size="lg"
            >
              Recommend
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
