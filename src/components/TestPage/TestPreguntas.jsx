import { useState, useEffect } from "react";

const TestPreguntas = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);
  return (
    <section className="test-section">
      <div className={visible ? "test-preguntas visible" : "test-preguntas"}>
        <h2>Pregunta 1</h2>
        <p>
          El ‘nick’ que utilizas en Internet, ¿te identifica como un chico o una
          chica?
        </p>
        <div className="btn-container">
          <button className="btn1">Si</button>
          <button className="btn1">No</button>
        </div>
      </div>
    </section>
  );
};

export default TestPreguntas;
