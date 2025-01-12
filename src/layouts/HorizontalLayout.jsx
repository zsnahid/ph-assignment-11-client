import { useLoaderData } from "react-router-dom";
import HorizontalCard from "../components/HorizontalCard";

export default function HorizontalLayout() {
  const queries = useLoaderData();
  // console.log(queries);
  return (
    <div className="space-y-4 my-8">
      {queries.map((query) => (
        <HorizontalCard
          key={query._id}
          query={query}
        />
      ))}
    </div>
  );
}
