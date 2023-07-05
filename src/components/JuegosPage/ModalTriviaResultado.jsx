import { Modal } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ModalTriviaResultado = ({ isOpen, handleClose, respuestas }) => {
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
        {respuestas >= 0 && respuestas <= 2 ? (
          <>
            <h2 className="title">Resultado de la trivia</h2>
            <p className="subtitle">Ha obtenido un resultado del %{respuestas * 10}</p>
            <p>Su resultado esta en un estado preocupante, intenta volviendo a nuestro apartado informativo, seguir estudiandolo y volver luego a aplicar lo aprendido. ¡No te desanimes!</p>
            <a className="btn1" href="/aprendamosjugando">Ir al apartado educativo</a>
          </>
        ) : respuestas > 2 && respuestas <= 4 ? (
          <>
            <h2 className="title">Resultado de la trivia</h2>
            <p className="subtitle">Ha obtenido un resultado del %{respuestas * 10}</p>
            <p>Falta un poco mas de estudio para que realmente estes a salvo, intenta volver a nuestro apartado informativo e intentar la trivia luego nuevamente. ¡Vos podes!</p>
            <a className="btn1" href="/aprendamosjugando">Ir al apartado educativo</a>
          </>
        ) : respuestas > 4 && respuestas <= 6 ? (
          <>
            <h2 className="title">Resultado de la trivia</h2>
            <p className="subtitle">Ha obtenido un resultado del %{respuestas * 10}</p>
            <p>Estas muy cerca de estar a salvo, pero aun falta un poco mas de información. Intenta volver a nuestro apartado informativo e intentar la trivia luego nuevamente. ¡No te desanimes!</p>
            <a className="btn1" href="/aprendamosjugando">Ir al apartado educativo</a>
          </>
        ) : respuestas > 6 && respuestas <= 9 ? (
          <>
            <h2 className="title">Resultado de la trivia</h2>
            <p className="subtitle">Ha obtenido un resultado del %{respuestas * 10}</p>
            <p>¡Muy bien! Sin embargo es importante que consigas el mayor porcentaje de aciertos posible para estar seguro de saber como reaccionar ante los peligros de internet. ¡Un último esfuerzo!</p>
            <a className="btn1" href="/aprendamosjugando">Ir al apartado educativo</a>
          </>
        ) : (
            <>
            <h2 className="title">Resultado de la trivia</h2>
            <p className="subtitle">Ha obtenido un resultado del %{respuestas * 10}</p>
            <p>¡Excelente! Obtuviste el mayor porcentaje de acierto posible, significa que estas preparado para afrontar los peligros de internet. Podes intentar tambien con nuestro juego Pasapalabra, para mas seguridad. ¡Felicitaciones!</p>
            <a className="btn1" href="/juego/ciberacoso/rosco">Jugar a Pasapalabra</a>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ModalTriviaResultado;
