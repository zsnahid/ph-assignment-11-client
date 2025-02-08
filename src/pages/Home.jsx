import axios from "axios";
import { useEffect, useState } from "react";
import HomePageQueryCard from "../components/HomePageQueryCard";
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
      <div className="grid grid-cols-3 gap-10 my-10 px-10">
        {queries.map((query) => (
          <HomePageQueryCard
            key={query._id}
            query={query}
          />
        ))}
      </div>
    </>
  );
}
