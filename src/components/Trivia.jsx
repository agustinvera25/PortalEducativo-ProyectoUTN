import { useState } from "react";
import { triviaCiberacoso } from "../assets/triviaCiberacoso";

const Trivia = () => {
  const [trivia, setTrivia] = useState(triviaCiberacoso);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [opcionesElegidas, setOpcionesElegidas] = useState({});
  const [respuestaActual, setRespuestaActual] = useState("");

  const agregarRespuesta = function () {
    if (respuestaActual.length > 0) {
      opcionesElegidas[preguntaActual + 1] = respuestaActual;
      setOpcionesElegidas(opcionesElegidas);
      setRespuestaActual("")
      if(preguntaActual < (trivia.length - 1)){
          setPreguntaActual(preguntaActual + 1);
      }
    }else{
        console.log('Seleccione una opcion')
    }
  };

  const calcularRespuestas = function () {
    agregarRespuesta();
    console.log("Fin de trivia");
  };

  const handleOpcionSeleccionada = (opcion) => setRespuestaActual(opcion);

  return (
    <section className="trivia-section">
      <div className="pregunta-container">
        <div className="pregunta">{trivia[preguntaActual].pregunta}</div>
        <div className="opciones">
          {trivia[preguntaActual].opciones.map((opcion) => (
            <h2
              className={
                opcion.letra === respuestaActual
                  ? "opcion seleccionada"
                  : "opcion"
              }
              key={opcion.letra}
              onClick={() => handleOpcionSeleccionada(opcion.letra)}
            >
              <span>{opcion.letra}</span>
              {") " + opcion.opcion}
            </h2>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <button
          className="btn1"
          onClick={() =>
            preguntaActual !== 0 && setPreguntaActual(preguntaActual - 1)
          }
        >
          Volver
        </button>
        <button
          className="btn1"
          onClick={() =>
            (trivia.length - 1) === preguntaActual
              ? calcularRespuestas()
              : agregarRespuesta()
          }
        >
          {(trivia.length - 1) === preguntaActual
            ? "Terminar trivia"
            : "Siguiente pregunta"}
        </button>
      </div>
    </section>
  );
};

export default Trivia;
