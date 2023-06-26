import { useState, useEffect } from "react";
import advertenciaIcon from '../../assets/icons/advertencia.png'

const TestResultados = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);
  return (
    <section className="test-section">
      <div className={visible ? "test-preguntas visible" : "test-preguntas"}>
        <h2>Resultado</h2>
        <img src={advertenciaIcon} alt="resultado icon" />
        <p>
          Tus perfiles online te describen tan bien que has incluido tu
          dirección postal y la escuela a la que vas. Eres una persona
          extrovertida y has aceptado solicitudes de amistad de gente que no
          conoces porque piensas que, al ser amigos de tus amigos, no pasa nada.
          Te recomendamos que pases a la segunda etapa de nuestra experiencia
          online para aprender sobre los peligros a los que te enfrentas y como
          prevenirlos.
        </p>
        <button className="btn1">Aprendamos jugando</button>
      </div>
    </section>
  );
};

export default TestResultados;
