/* eslint-disable react/prop-types */
import AllQueriesVerticalCard from "../components/AllQueriesVerticalCard";

export default function AllQueriesVerticalLayout({ queries, setQueries }) {
  // const queries = useLoaderData();
  // console.log(queries);
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {queries.map((query) => (
        <AllQueriesVerticalCard
          key={query._id}
          query={query}
        />
      ))}
    </div>
  );
}
