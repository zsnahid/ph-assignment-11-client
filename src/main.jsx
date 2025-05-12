import { ThemeProvider as MaterialTailwindProvider } from "@material-tailwind/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import { router } from "./routes/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MaterialTailwindProvider>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </MaterialTailwindProvider>
  </StrictMode>
);
