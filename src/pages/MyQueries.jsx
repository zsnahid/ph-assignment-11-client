import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import MySolidButton from "../components/MySolidButton";
export default function MyQueries() {
  return (
    <div>
      <section className="relative bg-[url('/src/assets/waves.svg')] bg-cover bg-center bg-no-repeat w-11/12 mx-auto rounded-2xl h-[80vh] shadow-2xl my-10">
        {/* <div className="absolute inset-0 z-10 bg-black/30 rounded-2xl"></div> */}
        <div className="absolute z-20 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-center">
          <Typography
            className="font-bold text-black text-3xl"
          >
            Ask the Community
          </Typography>
          <Typography
            variant="paragraph"
            className="text-gray-900"
          >
            Meet other Better Buy users like you. Get answers & discover new
            ways to use Better Buy.
          </Typography>
          <Link to={"/add-query"}>
            <button className="w-44 mt-4">
              <MySolidButton>Add Query</MySolidButton>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
