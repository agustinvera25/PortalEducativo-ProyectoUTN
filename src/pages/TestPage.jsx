import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TestInicio from "../components/TestPage/TestInicio";
import { TestContext } from "../contexts/TestContext";

const TestPage = () => {
  const { etapaTest } = useContext(TestContext);

  return (
    <>
      <Navbar />
      {etapaTest === 0 ? (
        <TestInicio />
      ) : etapaTest === 1 ? (
        <TestInicio />
      ) : etapaTest === 2 ? (
        <TestInicio />
      ) : (
        <TestInicio />
      )}
      <Footer />
    </>
  );
};

export default TestPage;
