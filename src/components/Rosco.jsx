import { useState } from "react";
import { roscoCiberacoso } from "../assets/roscoCiberacoso";
import { useEffect } from "react";
import { Alert } from "@mui/material";

const Rosco = () => {
  const [roscoActual, setRoscoActual] = useState([]);
  const [roscoResultado, setRoscoResultado] = useState({});
  const [letraActual, setLetraActual] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const [alertError, setAlertError] = useState(false);

  const letras = Object.keys(roscoCiberacoso);

  const handleInput = function (e) {
    const { value } = e.target;
    setInputValue(value);
  };

  const incrementarLetra = function () {
    if (letras.length > letraActual) {
      setLetraActual(letraActual + 1);
    } else {
      setLetraActual(0);
    }
    setInputValue("");
  };

  console.log(roscoActual[letraActual]);

  const handleResultado = function (e) {
    e.preventDefault();
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

  useEffect(() => {
    for (const letra in roscoCiberacoso) {
      const array = roscoCiberacoso[letra];
      const randomNumber = Math.floor(Math.random() * array.length);
      setRoscoActual((prev) => [...prev, array[randomNumber]]);
    }
  }, []);
  return (
    <section className="rosco-section">
      <h2 className="title">{roscoActual[letraActual]?.letra + ")" + roscoActual[letraActual]?.pista}</h2>
      <div className="letras-container">
        {letras.map((letra) => (
          <div
            className={
              letra === roscoActual[letraActual]?.letra
                ? "letra seleccionada"
                : roscoResultado[letra] === "correcto"
                ? "letra correcto"
                : roscoResultado[letra] === "incorrecto"
                ? "letra incorrecto"
                : "letra"
            }
            key={letra}
          >
            {letra}
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
          <button type="submit" className="btn1" onClick={handleResultado}>
            Intentar palabra
          </button>
          <button className="btn1" onClick={incrementarLetra}>
            Pasapalabra
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rosco;
