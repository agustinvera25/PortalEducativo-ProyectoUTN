import { Modal } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ModalRoscoResultados = ({ resultados, isOpen, handleClose }) => {
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
            <h2 className="title">¡Se terminó el juego!</h2>
            <p className="subtitle">Ha obtenido un resultado del %{Math.round((resultados * 100)/27)}</p>
            <p>blablabla</p>
            <a className="btn1" href="/aprendamosjugando">Ir al apartado educativo</a>
        </div>
    </Modal>
  );
};

export default ModalRoscoResultados;
