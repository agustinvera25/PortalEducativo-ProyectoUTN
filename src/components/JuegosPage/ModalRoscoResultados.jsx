import { Modal } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ModalRoscoResultados = ({ resultados, isOpen, handleClose }) => {
  const resultado = Math.round((resultados * 100) / 27);
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="modalTrivia">
        {resultado >= 0 && resultado <= 20 ? (
          <>
            <h2 className="title">¡Se terminó el juego!</h2>
            <p className="subtitle">
              Ha obtenido un resultado del %{resultado}
            </p>
            <p>
              Su resultado esta en un estado preocupante, intenta volviendo a
              nuestro apartado informativo, seguir estudiandolo y volver luego a
              aplicar lo aprendido. ¡No te desanimes!
            </p>
            <div className="btn-container">
              <a className="btn1" href="/aprendamosjugando">
                Ir al apartado educativo
              </a>
              <a className="btn1" href="/juego/ciberacoso/rosco">
                Jugar de nuevo
              </a>
            </div>
          </>
        ) : resultado > 20 && resultado <= 40 ? (
          <>
            <h2 className="title">¡Se terminó el juego!</h2>
            <p className="subtitle">
              Ha obtenido un resultado del %{resultado}
            </p>
            <p>
              Falta un poco mas de estudio para que realmente estes a salvo,
              intenta volver a nuestro apartado informativo e intentar la trivia
              luego nuevamente. ¡Vos podes!
            </p>
            <a className="btn1" href="/aprendamosjugando">
              Ir al apartado educativo
            </a>
          </>
        ) : resultado > 40 && resultado <= 60 ? (
          <>
            <h2 className="title">¡Se terminó el juego!</h2>
            <p className="subtitle">
              Ha obtenido un resultado del %{resultado}
            </p>
            <p>
              Estas muy cerca de estar a salvo, pero aun falta un poco mas de
              información. Intenta volver a nuestro apartado informativo e
              intentar la trivia luego nuevamente. ¡No te desanimes!
            </p>
            <a className="btn1" href="/aprendamosjugando">
              Ir al apartado educativo
            </a>
          </>
        ) : resultado > 60 && resultado <= 90 ? (
          <>
            <h2 className="title">¡Se terminó el juego!</h2>
            <p className="subtitle">
              Ha obtenido un resultado del %{resultado}
            </p>
            <p>
              ¡Muy bien! Sin embargo es importante que consigas el mayor
              porcentaje de aciertos posible para estar seguro de saber como
              reaccionar ante los peligros de internet. ¡Un último esfuerzo!
            </p>
            <a className="btn1" href="/aprendamosjugando">
              Ir al apartado educativo
            </a>
          </>
        ) : (
          <>
            <h2 className="title">¡Se terminó el juego!</h2>
            <p className="subtitle">
              Ha obtenido un resultado del %{resultado}
            </p>
            <p>
              ¡Excelente! Obtuviste el mayor porcentaje de acierto posible,
              significa que estas preparado para afrontar los peligros de
              internet. Podes intentar tambien con nuestro juego Pasapalabra,
              para mas seguridad. ¡Felicitaciones!
            </p>
            <a className="btn1" href="/juego/ciberacoso/rosco">
              Jugar a Pasapalabra
            </a>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ModalRoscoResultados;
