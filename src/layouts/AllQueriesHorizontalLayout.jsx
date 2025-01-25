/* eslint-disable react/prop-types */
import AllQueriesHorizontalCard from "../components/AllQueriesHorizontalCard";

export default function AllQueriesHorizontalLayout({ queries, setQueries }) {
  // const queries = useLoaderData();
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
