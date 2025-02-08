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
      <div className="grid lg:grid-cols-3 gap-10 my-10 w-11/12 mx-auto">
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


      <div>
        
      </div>
    </>
  );
}
