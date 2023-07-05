import { useState } from "react";
import { triviaCiberacoso, respuestasTriviaCiberacoso } from "../assets/triviaCiberacoso";
import { Alert } from "@mui/material";
import ModalTriviaResultado from "./JuegosPage/ModalTriviaResultado";

const Trivia = () => {
  const [trivia] = useState(triviaCiberacoso);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [opcionesElegidas, setOpcionesElegidas] = useState({});
  const [respuestaActual, setRespuestaActual] = useState("");
  const [respuestasCorrectas, setRespuestasCorrectas] = useState(0)

  const [errorAlert, setErrorAlert] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = ()=> setIsOpen(true)
  const handleCloseModal = ()=> setIsOpen(false)

  const agregarRespuesta = function () {
    if (respuestaActual.length > 0) {
      opcionesElegidas[preguntaActual + 1] = respuestaActual;
      setOpcionesElegidas(opcionesElegidas);
      setRespuestaActual("")
      if(preguntaActual < (trivia.length - 1)){
          setPreguntaActual(preguntaActual + 1);
      }
    }else{
      setInterval(()=>{
        setErrorAlert(false)
      }, 4000)
      setErrorAlert(true)
    }
  };

  const calcularRespuestas = function () {
    agregarRespuesta();
    let contadorRespuestas = 0
    for (let i = 1; i <= Object.keys(respuestasTriviaCiberacoso).length; i++) {
      if(respuestasTriviaCiberacoso[i] === opcionesElegidas[i]){
        contadorRespuestas += 1
      }
    }
    setRespuestasCorrectas(contadorRespuestas)
    handleOpenModal()
  };

  const handleOpcionSeleccionada = (opcion) => setRespuestaActual(opcion);

  return (
    <section className="trivia-section">
      <ModalTriviaResultado isOpen={isOpen} handleClose={handleCloseModal} respuestas={respuestasCorrectas}/>
      <div className="pregunta-container">
        <div className="pregunta title">{trivia[preguntaActual].pregunta}</div>
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
      {errorAlert && <Alert severity="error" style={{display:'flex', alignItems:'center', fontSize: '1.2rem'}}>Seleccione una opción antes de avanzar</Alert>}
      <div className="btn-container">
        <button
          className= {preguntaActual !== 0 ? 'btn1' : 'btn1 disabled'}
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
