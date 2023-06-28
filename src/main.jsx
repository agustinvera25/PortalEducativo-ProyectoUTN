import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import TestPage from "./pages/TestPage.jsx";
import { TestProvider } from "./contexts/TestContext.jsx";
import AprendamosPage from "./pages/AprendamosPage.jsx";
import JuegosPage from "./pages/JuegosPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/aprendamosjugando",
    element: <AprendamosPage />,
  },
  {
    path: "/juegos",
    element: <JuegosPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TestProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </TestProvider>
  </React.StrictMode>
);
