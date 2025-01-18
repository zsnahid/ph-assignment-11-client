import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyQueriesHorizontalCard from "../components/MyQueriesHorizontalCard";

export default function MyQueriesHorizontalLayout() {
  const data = useLoaderData();
  const [queries, setQueries] = useState(data);
  // console.log(queries);
  return (
    <div className="space-y-4 my-8">
      {queries.map((query) => (
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
