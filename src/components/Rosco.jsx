import { useState } from "react";
import { roscoCiberacoso } from "../assets/roscoCiberacoso";
import { useEffect } from "react";
import { Alert } from "@mui/material";
import ModalRoscoResultados from "./JuegosPage/ModalRoscoResultados";

const Rosco = () => {
  const [roscoActual, setRoscoActual] = useState([]);
  const [roscoResultado, setRoscoResultado] = useState({});
  const [letraActual, setLetraActual] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const [alertError, setAlertError] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const letras = Object.values(roscoActual);

  const handleInput = function (e) {
    const { value } = e.target;
    setInputValue(value);
  };

  const incrementarLetra = function () {
    if(!Object.keys(roscoResultado).includes(letras[letraActual + 1]?.letra)){
      if(letras.length > (letraActual + 1)){
        setLetraActual(letraActual + 1)
      }else{
        for (let i = 0; i < letras.length; i++) {
          if(!Object.keys(roscoResultado).includes(letras[i]?.letra)){
            console.log(letras[i]?.letra)
            setLetraActual(i)
            return
          }
        }
      }
    }else{
      for (let i = letraActual+1; i < letras.length; i++) {
        if(!Object.keys(roscoResultado).includes(letras[i]?.letra)){
          setLetraActual(i)
          return
        }
      }
    }
    setInputValue("");
  };

  const handleResultado = function (e) {
    e.preventDefault();
    if (Object.keys(roscoResultado).length === letras.length - 1) {
      handleOpenModal();
      return;
    }
    const respuesta = inputValue;
    const respuestaCorrecta = roscoActual[letraActual];
    if (respuesta === "") {
      setInterval(() => {
        setAlertError(false);
      }, 4000);
      setAlertError(true);
      return;
    }
    if (respuesta.toLowerCase() === respuestaCorrecta.palabra.toLowerCase()) {
      roscoResultado[respuestaCorrecta.letra] = "correcto";
      setRoscoResultado(roscoResultado);
    } else {
      roscoResultado[respuestaCorrecta.letra] = "incorrecto";
      setRoscoResultado(roscoResultado);
    }
    incrementarLetra();
  };

  const calcularResultado = function () {
    let contadorRespuestasCorrectas = 0;
    for (const respuesta in roscoResultado) {
      if (roscoResultado[respuesta] === "correcto") {
        contadorRespuestasCorrectas += 1;
      }
    }
    return contadorRespuestasCorrectas;
  };

  useEffect(() => {
    for (const letra in roscoCiberacoso) {
      const array = roscoCiberacoso[letra];
      const randomNumber = Math.floor(Math.random() * array.length);
      setRoscoActual((prev) => [...prev, array[randomNumber]]);
    }
  }, []);
  return (
    <section className="rosco-section">
      <h2 className="title">
        {roscoActual[letraActual]?.letra +
          ")" +
          roscoActual[letraActual]?.pista}
      </h2>
      <ModalRoscoResultados
        resultados={calcularResultado()}
        isOpen={isOpen}
        handleClose={handleCloseModal}
      />
      <div className="letras-container">
        {letras.map((letra) => (
          <div
            className={
              letra.letra === roscoActual[letraActual]?.letra
                ? "letra seleccionada"
                : roscoResultado[letra.letra] === "correcto"
                ? "letra correcto"
                : roscoResultado[letra.letra] === "incorrecto"
                ? "letra incorrecto"
                : "letra"
            }
            key={letra.letra}
          >
            {letra.letra.replace("Contiene", "")}
          </div>
        ))}
      </div>
      <div className="respuestas">
        <div className="input">
          <label htmlFor="respuesta">
            Longitud de la plabra:{" "}
            {roscoActual[letraActual] &&
              roscoActual[letraActual].palabra.length}
          </label>
          <input
            type="text"
            name="respuesta"
            value={inputValue}
            onChange={handleInput}
          />
        </div>
        {alertError && (
          <Alert
            severity="error"
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.2rem",
            }}
          >
            Ingrese una palabra antes de intentar
          </Alert>
        )}
        <div className="btn-container">
          <button className="btn1" onClick={incrementarLetra}>
            Pasapalabra
          </button>
          <button type="submit" className="btn1" onClick={handleResultado}>
            Intentar palabra
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rosco;
