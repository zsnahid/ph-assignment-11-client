import { Typography } from "@material-tailwind/react";
import SlotCounter from "react-slot-counter";
import funfact1 from "/src/assets/stats/fun-fact-1.png";
import funfact2 from "/src/assets/stats/fun-fact-2.png";
import funfact3 from "/src/assets/stats/fun-fact-3.png";
import funfact4 from "/src/assets/stats/fun-fact-4.png";
import funfact5 from "/src/assets/stats/fun-fact-5.png";

export default function ForumStats() {
  return (
    <div className="py-24 bg-secondary bg-opacity-20">
      <div className="w-11/12 mx-auto">
        <Typography variant="h3" className="text-center">
          Over 1200+ <br />
          completed work & still counting.
        </Typography>
        <div className="flex flex-wrap gap-8 justify-between mt-14">
          <div className="bg-white w-36 h-44 place-content-center rounded-lg drop-shadow-2xl">
            <img
              src={funfact1}
              alt="Users statistics icon"
              className="mx-auto"
            />
            <Typography
              variant="h3"
              className="text-center text-[#26BBDB] mt-3"
            >
              <SlotCounter value={"842K"} />
            </Typography>
            <Typography color="gray" className="font-semibold text-center">
              Users
            </Typography>
          </div>
          <div className="bg-white w-36 h-44 place-content-center rounded-lg drop-shadow-2xl">
            <img
              src={funfact2}
              alt="Topics statistics icon"
              className="mx-auto"
            />
            <Typography
              variant="h3"
              className="text-center text-[#FBC45A] mt-3"
            >
              <SlotCounter value={1023} />
            </Typography>
            <Typography color="gray" className="font-semibold text-center">
              Topics
            </Typography>
          </div>
          <div className="bg-white w-36 h-44 place-content-center rounded-lg drop-shadow-2xl">
            <img
              src={funfact3}
              alt="Forums statistics icon"
              className="mx-auto"
            />
            <Typography
              variant="h3"
              className="text-center text-[#FD65B4] mt-3"
            >
              <SlotCounter value={196} />
            </Typography>
            <Typography color="gray" className="font-semibold text-center">
              Forums
            </Typography>
          </div>
          <div className="bg-white w-36 h-44 place-content-center rounded-lg drop-shadow-2xl">
            <img
              src={funfact4}
              alt="Replies statistics icon"
              className="mx-auto"
            />
            <Typography
              variant="h3"
              className="text-center text-[#23C99B] mt-3"
            >
              <SlotCounter value={"650K"} />
            </Typography>
            <Typography color="gray" className="font-semibold text-center">
              Replies
            </Typography>
          </div>
          <div className="bg-white w-36 h-44 place-content-center rounded-lg drop-shadow-2xl">
            <img src={funfact5} alt="" className="mx-auto" />
            <Typography
              variant="h3"
              className="text-center text-[#9A6BFC] mt-3"
            >
              <SlotCounter value={364} />
            </Typography>
            <Typography color="gray" className="font-semibold text-center">
              Tags
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
