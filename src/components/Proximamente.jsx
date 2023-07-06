import proximamenteIlu from "../assets/ilustaciones/proximamente.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Proximamente = () => {
  return (
    <>
      <Navbar />
      <section className="proximamente-section">
        <h2 className="title">Estamos trabajando en esta sección</h2>
        <p className="subtitle">Muy pronto estará disponible</p>
        <img src={proximamenteIlu} alt="Ilustracion desarrollador" />
      </section>
      <Footer />
    </>
  );
};

export default Proximamente;
