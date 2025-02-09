/* eslint-disable react/no-unescaped-entities */
import { Carousel, Typography } from "@material-tailwind/react";

export default function Slider() {
  return (
    <Carousel
      loop={true}
      className="h-[40rem]"
    >
      <div className="relative h-full w-full">
        <div className="absolute z-10 bottom-0 left-[50%] -translate-x-[50%] flex justify-evenly items-end w-full">
          <img src="/src/assets/hero-img-1.png" />
          <img
            src="/src/assets/hero-img-2.png"
            className="hidden md:block"
          />
          <img src="/src/assets/hero-img-3.png" />
          <img src="/src/assets/hero-img-4.png" />
          <img
            src="/src/assets/hero-img-5.png"
            className="hidden md:block"
          />
          <img src="/src/assets/hero-img-1.png" />
        </div>
        <div className="absolute inset-0 grid h-full w-full items-center bg-[#fab387]/70">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Join the world's biggest Q&A network
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 z-10">
          <img
            src="/src/assets/img1.jpg"
            className="hidden md:block absolute bottom-0 right-0 opacity-75 rounded-tl-xl"
          />
          <img
            src="/src/assets/img4.jpg"
            className="hidden md:block absolute top-[10%] right-[10%] rounded-xl opacity-75 size-32"
          />
          <img
            src="/src/assets/img4.jpg"
            className="hidden md:block absolute bottom-0 left-[10%] translate-y-[50%] rounded-xl opacity-50"
          />
          <img
            src="/src/assets/img2.jpg"
            className="hidden md:block absolute top-[35%] right-[15%] rounded-xl"
          />
          <img
            src="/src/assets/img3.jpg"
            className="hidden md:block absolute top-[20%] right-[35%] size-28 opacity-50 rounded-xl"
          />
        </div>

        <div className="absolute inset-0 grid h-full w-full items-center bg-[#fab387]/70">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
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
        <div className="absolute inset-0 grid h-full w-full items-center bg-[#fab387]/70">
          <div className="md:w-full text-center pb-12 md:pb-20 lg:pb-32">
            <Typography
              variant="h1"
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
            <img src="/src/assets/qa.svg" />
            <div>
              <Typography variant="h5">Ask Questions</Typography>
              <Typography
                color="gray"
                className="font-medium"
              >
                Get the right answers first
              </Typography>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img src="/src/assets/form.svg" />
            <div>
              <Typography variant="h5">Answer Questions</Typography>
              <Typography
                color="gray"
                className="font-medium"
              >
                Spend five minutes feeling smart
              </Typography>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img src="/src/assets/hero.svg" />
            <div>
              <Typography variant="h5">Be Somebody's Hero</Typography>
              <Typography
                color="gray"
                className="font-medium"
              >
                Pat yourself on the back. You deserve it.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
