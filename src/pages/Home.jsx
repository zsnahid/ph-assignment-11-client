/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import HomePageQueryCard from "../components/HomePageQueryCard";
import MySolidButton from "../components/MySolidButton";
import Slider from "../components/Slider";

export default function Home() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/queries/latest")
      .then((res) => {
        console.log(res.data);
        setQueries(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Slider />

      <Typography variant="h2" className="w-11/12 mx-auto mb-5 mt-32">Recent Queries</Typography>
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
            <img src="/src/assets/icon-1.svg" />
            <div>
              <Typography variant="h4">1M+</Typography>
              <Typography>Members</Typography>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            <img src="/src/assets/icon-2.svg" />
            <div>
              <Typography variant="h4">100+</Typography>
              <Typography>Forums</Typography>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            <img src="/src/assets/icon-3.svg" />
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
            src="/src/assets/daily-notification-bg.png"
            className="element"
          />
          <img
            src="/src/assets/Post.png"
            className="element"
          />
          <img
            src="/src/assets/Comment.png"
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
            Questions before contributing to WordPress support, both when asking
            for and giving support, this helps maintain a friendly and welcoming
            atmosphere for all involved. I asked this writer for a guest post,
            which he seemed happy to write for me.
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
            src="/src/assets/daily-notification-bg.png"
            className="element"
          />
          <img
            src="/src/assets/daily-notification.png"
            className="element"
          />
        </div>
      </div>
    </>
  );
}
