import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyQueriesHorizontalCard from "../components/MyQueriesHorizontalCard";
import { AuthContext } from "../contexts/AuthContext";

export default function MyQueriesHorizontalLayout() {
  const data = useLoaderData();
  const [queries, setQueries] = useState(data);
  // console.log(queries);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/queries/filter?email=${encodeURIComponent(
          user.email
        )}`
      )
      .then((res) => {
        console.log(res.data);
        setQueries(res.data);
      })
      .catch((error) => console.error(error));
  }, [user.email]);

  return (
    <div className="space-y-4 my-8">
      {queries?.map((query) => (
        <MyQueriesHorizontalCard
          key={query._id}
          query={query}
          queries={queries}
          setQueries={setQueries}
        />
      ))}
    </div>
  );
}
