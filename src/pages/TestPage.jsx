import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TestInicio from "../components/TestPage/TestInicio";
import { TestContext } from "../contexts/TestContext";
import TestPreguntas from "../components/TestPage/TestPreguntas";

const TestPage = () => {
  const { testEtapa } = useContext(TestContext);
  
  return (
      <>
        <Navbar />
        {testEtapa === 0 ? (
          <TestInicio />
        ) : testEtapa === 1 ? (
          <TestPreguntas />
        ) : testEtapa === 2 ? (
          <TestInicio />
        ) : (
          <TestInicio />
        )}
        <Footer />
    </>
  );
};

export default TestPage;
