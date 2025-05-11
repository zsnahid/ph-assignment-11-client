import { Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Community from "./Community";

export default function Communities() {
  const [communities, setCommunities] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get("/communities.json")
      .then((res) => {
        console.log(res.data);

        setCommunities(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const displayedCommunities = showAll ? communities : communities.slice(0, 5);

  return (
    <div className="w-11/12 mx-auto mt-12">
      <Typography variant="h3" className="text-center mb-8">
        Find Your Communities
      </Typography>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-8">
        {displayedCommunities.map((community) => (
          <Community key={community.id} community={community} />
        ))}
      </div>

      {communities.length > 5 && (
        <div className="text-center mt-8">
          <Button
            variant="text"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="text-primary border-b-2"
          >
            {showAll ? "Hide Communities -" : "More Communities +"}
          </Button>
        </div>
      )}
    </div>
  );
}
