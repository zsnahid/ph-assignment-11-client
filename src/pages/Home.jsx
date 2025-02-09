/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import HomePageQueryCard from "../components/HomePageQueryCard";
import MySolidButton from "../components/MySolidButton";
import Slider from "../components/Slider";

import icon_1 from "/src/assets/icon_1.svg";
import icon_2 from "/src/assets/icon_2.svg";
import icon_3 from "/src/assets/icon_3.svg";

import Comment from "/src/assets/Comment.png";
import daily_notification from "/src/assets/daily_notification.png";
import daily_notification_bg from "/src/assets/daily_notification_bg.png";
import Post from "/src/assets/Post.png";

export default function Home() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ph-assignment-11-server-ten.vercel.app/queries/latest")
      .then((res) => {
        // console.log(res.data);
        setQueries(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Slider />

      <Typography
        variant="h2"
        className="w-11/12 mx-auto mb-5 mt-32"
      >
        Recent Queries
      </Typography>
      <div className="grid lg:grid-cols-3 gap-10 mb-10 w-11/12 mx-auto">
        {queries.map((query) => (
          <HomePageQueryCard
            key={query._id}
            query={query}
          />
        ))}
      </div>

      <div className="my-10 w-11/12 mx-auto grid lg:grid-cols-2 gap-5 lg:gap-20 items-center">
        <div className="flex justify-between items-center">
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            <img src={icon_1} />
            <div>
              <Typography variant="h4">1M+</Typography>
              <Typography>Members</Typography>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            <img src={icon_2} />
            <div>
              <Typography variant="h4">100+</Typography>
              <Typography>Forums</Typography>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            <img src={icon_3} />
            <div>
              <Typography variant="h4">110+</Typography>
              <Typography>Countries</Typography>
            </div>
          </div>
        </div>
        <div>
          <MySolidButton>Start a discussion</MySolidButton>
        </div>
      </div>

      <div className="my-20 w-11/12 mx-auto grid lg:grid-cols-2 gap-10">
        <div className="container">
          <img
            src={daily_notification_bg}
            className="element"
          />
          <img
            src={Post}
            className="element"
          />
          <img
            src={Comment}
            className="element relative top-[50%] left-[50%] -translate-x-[50%]"
          />
        </div>

        <div className="space-y-5 self-center">
          <Typography variant="h2">
            Discover a great collection of post variations
          </Typography>
          <Typography
            variant="lead"
            className="text-gray-700"
          >
            The Forum activity allows qustioners and answerers to exchange ideas
            by posting comments as part of a 'thread'. Files such as images and
            media maybe included in forum posts. The answerers can choose to
            grade and/or rate forum posts.
          </Typography>
          <Typography
            variant="h5"
            className="pt-5 border-t-2 border-black"
          >
            This is an incredible forum
          </Typography>
        </div>
      </div>

      <div className="mb-20 w-11/12 mx-auto grid lg:grid-cols-2 gap-10">
        <div className="space-y-5 self-center">
          <Typography variant="h2">
            Activate daily notifications and never miss a thing
          </Typography>
          <Typography
            variant="lead"
            className="text-gray-700"
          >
            Please make sure you read the forum guidelines and Frequently Asked
            Questions before contributing, both when asking for and giving
            support, this helps maintain a friendly and welcoming atmosphere for
            all involved.
          </Typography>
          <Typography
            variant="h5"
            className="pt-5 border-t-2 border-black"
          >
            Interested in our network?
          </Typography>
        </div>

        <div className="container place-items-center">
          <img
            src={daily_notification_bg}
            className="element"
          />
          <img
            src={daily_notification}
            className="element"
          />
        </div>
      </div>
    </>
  );
}
