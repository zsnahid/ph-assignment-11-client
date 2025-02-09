import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MyQueriesVerticalCard from "../components/MyQueriesVerticalCard";
import { AuthContext } from "../contexts/AuthContext";

export default function MyQueriesVerticalLayout() {
  const [queries, setQueries] = useState([]);
  // console.log(queries);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        `https://ph-assignment-11-server-ten.vercel.app/queries/filter?email=${encodeURIComponent(
          user.email
        )}`,
        { withCredentials: true }
      )
      .then((res) => {
        // console.log(res.data);
        setQueries(res.data);
      })
      .catch((error) => console.error(error));
  }, [user.email]);

  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {queries?.map((query) => (
        <MyQueriesVerticalCard
          key={query._id}
          query={query}
          queries={queries}
          setQueries={setQueries}
        />
      ))}
    </div>
  );
}
