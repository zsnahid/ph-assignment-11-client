import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Collapse,
  IconButton,
  Navbar,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import MyOutlinedButton from "./MyOutlinedButton";
import MySolidButton from "./MySolidButton";

export default function MyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal"
      >
        <a
          href="/"
          className="flex items-center"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal"
      >
        <a
          href="/queries"
          className="flex items-center"
        >
          Queries
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal"
      >
        <a
          href="/queries"
          className="flex items-center"
        >
          Recommendations For Me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal"
      >
        <a
          href="/my-queries"
          className="flex items-center"
        >
          My Queries
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal"
      >
        <a
          href="/queries"
          className="flex items-center"
        >
          My Recommendations
        </a>
      </Typography>
    </ul>
  );

  const loggedOutNavList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal"
      >
        <a
          href="/"
          className="flex items-center"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal"
      >
        <a
          href="/queries"
          className="flex items-center"
        >
          Queries
        </a>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-none border-none bg-gray-50">
        <div className="flex items-center justify-between text-gray-900">
          <div className="flex items-center gap-x-2">
            <img
              src="/logo.png"
              alt="logo of better buy"
              className="size-8"
            />
            <Typography
              as="a"
              href="/"
              className="mr-4 cursor-pointer py-1.5 font-bold text-lg"
            >
              Better Buy
            </Typography>
          </div>

          <div className="mr-4 hidden lg:block">
            {user ? navList : loggedOutNavList}
          </div>

          {user ? (
            <div className="hidden lg:flex place-items-center">
              <Tooltip content={user.displayName}>
                <Avatar
                  src={user.photoURL}
                  size="md"
                  variant="rounded"
                  className="mr-4"
                />
              </Tooltip>
              <button
                className="w-44"
                onClick={handleLogOut}
              >
                <MyOutlinedButton>Log Out</MyOutlinedButton>
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex place-items-center">
              <UserCircleIcon className="mr-4 size-10" />
              <Link to="/login">
                <button className="w-44">
                  <MySolidButton>Log In</MySolidButton>
                </button>
              </Link>
            </div>
          )}

          <div className="lg:hidden flex place-items-center">
            {user ? (
              <Tooltip content={user.displayName}>
                <Avatar
                  size="xs"
                  src={user.photoURL}
                  variant="rounded"
                />
              </Tooltip>
            ) : (
              <UserCircleIcon className="size-8" />
            )}
            <IconButton
              variant="text"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon
                  className="h-6 w-6"
                  strokeWidth={2}
                />
              ) : (
                <Bars3Icon
                  className="h-6 w-6"
                  strokeWidth={2}
                />
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {user ? navList : loggedOutNavList}
          {user ? (
            <button
              className="lg:hidden w-full"
              onClick={handleLogOut}
            >
              <MyOutlinedButton>Log Out</MyOutlinedButton>
            </button>
          ) : (
            <Link to="/login">
              <button className="lg:hidden w-full">
                <MySolidButton>Log In</MySolidButton>
              </button>
            </Link>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}
