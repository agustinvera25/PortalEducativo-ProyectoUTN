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
            {resultados}
        </div>
    </Modal>
  );
};

export default ModalRoscoResultados;
