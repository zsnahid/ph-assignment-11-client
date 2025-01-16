import { useLoaderData } from "react-router-dom";
import MyQueriesVerticalCard from "../components/MyQueriesVerticalCard";

export default function MyQueriesVerticalLayout() {
  const queries = useLoaderData();
  // console.log(queries);
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {queries.map((query) => (
        <MyQueriesVerticalCard
          key={query._id}
          query={query}
        />
      ))}
    </div>
  );
}
