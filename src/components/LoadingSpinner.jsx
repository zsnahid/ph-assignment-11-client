import { Spinner } from "@material-tailwind/react";
import { useTheme } from "../contexts/ThemeContext";

export default function LoadingSpinner() {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex-grow flex place-content-center">
      <Spinner
        className={`m-20 size-8 ${isDarkMode ? "text-white" : "text-black"}`}
      />
    </div>
  );
}
