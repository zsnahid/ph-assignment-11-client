import { Button, Typography } from "@material-tailwind/react";
import { FaLinkedin } from "react-icons/fa6";
import v from "/src/assets/footer_svg/v.svg";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-primary bg-opacity-5 pt-16"
      style={{
        backgroundImage: `url(${v})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
      }}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-8">
        <div className="grid grid-cols-1 justify-between gap-8 md:grid-cols-2">
          <div>
            <Typography variant="h3" color="black" className="mb-3 font-serif">
              Qrius
            </Typography>
            <Typography variant="lead" className="font-semibold">
              Subscribe to our Newsletter
            </Typography>
            <form className="mt-6">
              <div className="relative max-w-lg">
                <label className="sr-only" htmlFor="email">
                  {" "}
                  Email{" "}
                </label>

                <input
                  className="w-full rounded-md border-white bg-white p-4 pe-32 text-sm font-medium"
                  id="email"
                  type="email"
                  placeholder="john@doe.com"
                />

                <Button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-primary bg-opacity-90 px-5 py-3 text-sm font-medium text-white transition hover:bg-primary hover:bg-opacity-100">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="lead"
                  color="black"
                  className="mb-3 font-medium"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-primary"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        {/* copyright text and social link */}
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-black/50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            color="gray"
            className="mb-4 text-center font-normal md:mb-0"
          >
            &copy; {currentYear} <span className="font-serif">Qrius</span>. All
            Rights Reserved.
          </Typography>
          <div className="flex items-center gap-4 sm:justify-center">
            <Typography className="opacity-80 transition-opacity hover:opacity-100">
              <svg
                className="h-5 w-5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography className="opacity-80 transition-opacity hover:opacity-100">
              <FaLinkedin className="size-5 text-black" />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
