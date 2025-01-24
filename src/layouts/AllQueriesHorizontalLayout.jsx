import { useLoaderData } from "react-router-dom";
import AllQueriesHorizontalCard from "../components/AllQueriesHorizontalCard";

export default function AllQueriesHorizontalLayout() {
  const queries = useLoaderData();
  // console.log(queries);

  return (
    <div className="space-y-4 my-8">
      {queries.map((query) => (
        <AllQueriesHorizontalCard
          key={query._id}
          query={query}
        />
      ))}
    </div>
  );
}
