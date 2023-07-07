import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import TestPage from "./pages/TestPage.jsx";
import { TestProvider } from "./contexts/TestContext.jsx";
import AprendamosPage from "./pages/AprendamosPage.jsx";
import JuegosPage from "./pages/JuegosPage.jsx";
import CiberacosoRosco from "./components/JuegosPage/CiberacosoRosco.jsx";
import CiberacosoTrivia from "./components/JuegosPage/CiberacosoTrivia.jsx";
import Proximamente from "./components/Proximamente.jsx";
import SobreNosotros from "./components/Nosotros/SobreNosotros.jsx";

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
    path: "/sobrenosotros",
    element: <SobreNosotros />,
  },
  {
    path: "/juegos",
    element: <JuegosPage />,
  },
  {
    path: "/juego/ciberacoso/rosco",
    element: <CiberacosoRosco />,
  },
  {
    path: "/juego/ciberacoso/trivia",
    element: <CiberacosoTrivia />,
  },
  {
    path: "/terms",
    element: <Proximamente />,
  },
  {
    path: "/police",
    element: <Proximamente />,
  },
  {
    path: "/cookies",
    element: <Proximamente />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <TestProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </TestProvider>
);
