import { useState, useEffect, useContext } from "react";
import { resultadosTest } from "../../assets/resultadosTest";
import { TestContext } from "../../contexts/TestContext";

const TestResultados = () => {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState({ title: "", icon: "", text: "" });

  const { puntosTest } = useContext(TestContext);

  console.log(puntosTest);

  useEffect(() => {
    setVisible(true);
    if (puntosTest >= 0 && puntosTest <= 2) {
      setResult(resultadosTest[0]);
    } else if (puntosTest >= 3 && puntosTest <= 4) {
      setResult(resultadosTest[1]);
    } else {
      setResult(resultadosTest[2]);
    }
  }, []);
  return (
    <section className="test-section">
      <div className={visible ? "test-preguntas visible" : "test-preguntas"}>
        <h2>{result.title}</h2>
        <img src={result.icon} alt="resultado icon" />
        <p>{result.text}</p>
        <div className="btn-container">
          <button className="btn1" onClick={()=> window.location.reload()}>Reintentar test</button>
          <button className="btn1" onClick={()=> window.location.href = '/aprendamosjugando'}>Aprendamos jugando</button>
        </div>
      </div>
    </section>
  );
};

export default TestResultados;
