import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import TestPage from "./pages/TestPage.jsx";
import { TestProvider } from "./contexts/TestContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TestProvider>
      <RouterProvider router={router} />
      <App />
    </TestProvider>
  </React.StrictMode>
);
