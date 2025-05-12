import { Typography } from "@material-tailwind/react";

/* eslint-disable react/prop-types */
export default function Community({ community }) {
  //console.log(community);

  const { name, icon, users } = community;

  // console.log(name, icon, users);

  return (
    <div>
      <img
        src={icon}
        alt={`icon of ${name} community`}
        className="bg-white p-8 rounded-lg mx-auto shadow-md"
      />

      <Typography variant="lead" className="text-center mt-2 font-medium">
        {name}
      </Typography>
    </div>
  );
}
