import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext.jsx";

export default function MyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out!");
        setOpenNav(false); // Close nav drawer after logout
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // Close navigation drawer when route changes
  React.useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  // Helper function to close the navigation drawer
  const handleNavLinkClick = () => {
    setOpenNav(false);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/queries", label: "All Queries" },
    ...(user
      ? [
          { path: "/my-queries", label: "My Queries" },
          {
            type: "dropdown",
            label: "Recommendations",
            items: [
              {
                path: "/my-recommendations",
                label: "Recommendations by Me",
              },
              {
                path: "/recommendations-for-me",
                label: "Recommendations for Me",
              },
            ],
          },
        ]
      : []),
  ];

  const renderNavList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) =>
        item.type === "dropdown" ? (
          <Menu key={item.label} placement="bottom">
            <MenuHandler>
              <Typography
                as="li"
                color={isDarkMode ? "white" : "black"}
                className="p-1 font-medium cursor-pointer"
              >
                <span className="flex items-center gap-1 transition-all duration-200 hover:text-primary/80">
                  {item.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-3 w-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </Typography>
            </MenuHandler>
            <MenuList
              className={`${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              {item.items.map((subItem) => (
                <Link
                  key={subItem.path}
                  to={subItem.path}
                  onClick={handleNavLinkClick}
                >
                  <MenuItem
                    className={`flex items-center transition-all duration-200 ${
                      isActive(subItem.path)
                        ? "text-primary font-semibold"
                        : `${
                            isDarkMode
                              ? "text-gray-300 hover:text-primary/80"
                              : "text-gray-700 hover:text-primary/80"
                          }`
                    }`}
                  >
                    {subItem.label}
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        ) : (
          <Typography
            key={item.path}
            as="li"
            color={isDarkMode ? "white" : "black"}
            className="p-1 font-medium"
          >
            <Link
              to={item.path}
              className={`flex items-center transition-all duration-200 ${
                isActive(item.path)
                  ? "text-primary font-semibold"
                  : "hover:text-primary/80"
              }`}
              onClick={handleNavLinkClick}
            >
              {item.label}
            </Link>
          </Typography>
        )
      )}
    </ul>
  );

  return (
    <div>
      <Navbar
        className={`fixed top-0 z-[60] max-w-full border-none rounded-none shadow-none px-4 lg:px-10 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-x-2">
            <img
              src="/social.png"
              alt="Qrius logo"
              className="size-8 hover:opacity-80 transition-opacity"
            />
            <Typography
              as={Link}
              to="/"
              className={`cursor-pointer py-1.5 font-medium text-2xl font-serif hover:opacity-80 transition-opacity ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
              onClick={handleNavLinkClick}
            >
              Qrius
            </Typography>
          </div>

          {/* Desktop Navigation */}
          <div className="mr-4 hidden lg:block">{renderNavList}</div>

          {/* Desktop User Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <IconButton
              variant="text"
              className={`rounded-full ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5 text-white" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </IconButton>

            {user ? (
              <div className="flex items-center gap-3">
                <Tooltip content={user.displayName}>
                  <Avatar
                    src={user.photoURL}
                    size="sm"
                    variant="circular"
                    className={`cursor-pointer ring-2 ${
                      isDarkMode ? "ring-gray-700" : "ring-gray-100"
                    }`}
                  />
                </Tooltip>
                <button
                  onClick={handleLogOut}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link to="/loginpage" onClick={handleNavLinkClick}>
                <Button color="green" className="rounded-full">
                  Log In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu and Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <IconButton
              variant="text"
              className={`rounded-full ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </IconButton>

            {user && (
              <Tooltip content={user.displayName}>
                <Avatar
                  size="sm"
                  src={user.photoURL}
                  variant="circular"
                  className={`ring-2 ${
                    isDarkMode ? "ring-gray-700" : "ring-gray-100"
                  }`}
                />
              </Tooltip>
            )}

            <IconButton
              variant="text"
              className={`ml-auto ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </IconButton>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <Collapse open={openNav}>
          <div
            className={`lg:hidden mt-2 ${
              isDarkMode
                ? "border-t border-gray-700"
                : "border-t border-gray-100"
            }`}
          >
            {renderNavList}
            {user ? (
              <button
                onClick={handleLogOut}
                className={`w-full mt-4 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/loginpage"
                className="block mt-4"
                onClick={handleNavLinkClick}
              >
                <button
                  className={`w-full px-6 py-2 rounded-full text-sm font-medium ${
                    isDarkMode
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  } transition-all`}
                >
                  Log In
                </button>
              </Link>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
