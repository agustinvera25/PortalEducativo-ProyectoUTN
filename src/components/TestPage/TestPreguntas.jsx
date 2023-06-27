import { useState, useEffect, useContext } from "react";
import { TestContext } from "../../contexts/TestContext";
import { preguntasTest } from "../../assets/preguntas";

const TestPreguntas = () => {
  const [visible, setVisible] = useState(false);

  const {preguntaActual, nextQuestion, handleResponse} = useContext(TestContext)

  useEffect(() => setVisible(true), []);
  return (
    <section className="test-section">
      <div className={visible ? "test-preguntas visible" : "test-preguntas"}>
        <h2>Pregunta {preguntaActual + 1}</h2>
        <p>
          {preguntasTest[preguntaActual]}
        </p>
        <div className="btn-container">
          <button className="btn1" onClick={()=>{
            handleResponse(true)
            nextQuestion()
          }}>Si</button>
          <button className="btn1" onClick={()=>{
            handleResponse(false)
            nextQuestion()
          }}>No</button>
        </div>
      </div>
    </section>
  );
};

export default TestPreguntas;
