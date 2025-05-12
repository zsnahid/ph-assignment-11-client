/* eslint-disable react/no-unescaped-entities */
import { Carousel, Typography } from "@material-tailwind/react";
import hero_img_1 from "/src/assets/hero_img_1.png";
import hero_img_2 from "/src/assets/hero_img_2.png";
import hero_img_3 from "/src/assets/hero_img_3.png";
import hero_img_4 from "/src/assets/hero_img_4.png";
import hero_img_5 from "/src/assets/hero_img_5.png";

import img1 from "/src/assets/img1.jpg";
import img2 from "/src/assets/img2.jpg";
import img3 from "/src/assets/img3.jpg";
import img4 from "/src/assets/img4.jpg";

import form from "/src/assets/form.svg";
import hero from "/src/assets/hero.svg";
import qa from "/src/assets/qa.svg";

export default function Slider() {
  return (
    <Carousel loop={true} className="h-[40rem]">
      <div className="relative h-full w-full">
        <div className="absolute z-10 bottom-0 left-[50%] -translate-x-[50%] flex justify-evenly items-end w-full">
          <img src={hero_img_1} alt="Forum community member illustration 1" />
          <img
            src={hero_img_2}
            alt="Forum community member illustration 2"
            className="hidden md:block"
          />
          <img src={hero_img_3} alt="Forum community member illustration 3" />
          <img src={hero_img_4} alt="Forum community member illustration 4" />
          <img
            src={hero_img_5}
            alt="Forum community member illustration 5"
            className="hidden md:block"
          />
          <img src={hero_img_1} alt="Forum community member illustration 1" />
        </div>
        <div className="absolute inset-0 grid h-full w-full items-center bg-secondary">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h3"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Join the world's biggest Q&A network
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 z-10">
          {" "}
          <img
            src={img1}
            alt="Decorative community background image 1"
            className="hidden md:block absolute bottom-0 right-0 opacity-75 rounded-tl-xl"
          />
          <img
            src={img4}
            alt="Decorative community background image 2"
            className="hidden md:block absolute top-[10%] right-[10%] rounded-xl opacity-75 size-32"
          />
          <img
            src={img4}
            alt="Decorative community background image 3"
            className="hidden md:block absolute bottom-0 left-[10%] translate-y-[50%] rounded-xl opacity-50"
          />
          <img
            src={img2}
            alt="Decorative community background image 4"
            className="hidden md:block absolute top-[35%] right-[15%] rounded-xl"
          />
          <img
            src={img3}
            className="hidden md:block absolute top-[20%] right-[35%] size-28 opacity-50 rounded-xl"
          />
        </div>

        <div className="absolute inset-0 grid h-full w-full items-center bg-secondary">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h3"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Share and Grow the World's Knowledge
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mb-12 opacity-80"
            >
              We want to connect the people who have knowledge to the people who
              need it, to bring together people.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <div className="absolute inset-0 grid h-full w-full items-center bg-secondary">
          <div className="md:w-full text-center pb-12 md:pb-20 lg:pb-32">
            <Typography
              variant="h3"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Social Q&A Community
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mb-12 opacity-80"
            >
              The question and answer site designed to help people, to help each
              other: To ask, to learn, to share, to grow.
            </Typography>
          </div>
        </div>

        <div className="w-11/12 mx-auto absolute bottom-[10%] left-[50%] -translate-x-[50%] z-10 hidden md:flex justify-between">
          <div className="flex gap-5 items-center">
            <img src={qa} alt="Question and Answer icon" />
            <div>
              <Typography variant="h5">Ask Questions</Typography>
              <Typography color="gray" className="font-medium">
                Get the right answers first
              </Typography>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img src={form} alt="Form submission icon" />
            <div>
              <Typography variant="h5">Answer Questions</Typography>
              <Typography color="gray" className="font-medium">
                Spend five minutes feeling smart
              </Typography>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img src={hero} alt="Hero member icon" />
            <div>
              <Typography variant="h5">Be Somebody's Hero</Typography>
              <Typography color="gray" className="font-medium">
                Pat yourself on the back. You deserve it.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
