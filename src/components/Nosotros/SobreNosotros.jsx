import listaAlumnos from "../../assets/listaAlumnos";
import Footer from "../Footer";
import Navbar from "../Navbar";

const SobreNosotros = () => {
  return (
    <>
      <Navbar />
      <section className="nostros-section">
        <div className="text-section">
          <h2 className="title">¿Quienes somos?</h2>
          <span className="subtitle">Los Codificadores</span>
          <div>
            <p>
              Somos un grupo integrado por 5 estudiantes de la Tecnicatura
              Universitaria en Programación de la UTN – FRSR, Argentina. El
              nombre de nuestro grupo: ‘Los Codificadores’.{" "}
            </p>
            <p>
              Nos complace presentar nuestra primera página web en común; creada
              con el propósito de ayudar a padres e hijos en un tema que nos
              apasiona: la concientización sobre los ciberdelitos y la
              protección de los más jóvenes en línea.
            </p>
          </div>
        </div>
        <div className="contenedor-alumnos">
          {listaAlumnos.map((alumno) => (
            <div className="alumno" key={alumno.nombre}>
              <img src={alumno.foto} alt="alumno retrato" />
              <span>{alumno.nombre}</span>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SobreNosotros;
