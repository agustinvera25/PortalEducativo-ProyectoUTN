import { useState } from "react";
import coheteImg from "../../assets/images/cohete.png";
import { useEffect } from "react";
import DetrasDelProyecto from "../DetrasDelProyecto";

const Header = () => {
  const [cohete, setCohete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCohete(true);
    }, 1000);
  }, []);
  return (
    <header className="header">
      <div className="text-section">
        <h1>¡Bienvenidos a NombreXD!</h1>
        <p>
          En el mundo en el que vivimos hoy es necesario saber como cuidarnos y
          como cuidar nuestro entorno con las nuevas herramientas como internet,
          redes sociales y medios de comunicación. La presente página tiene como
          finalidad mediante una temática impactante y métodos didácticos,
          concientizar, enseñar y entretener a niños, niñas y adolescentes,
          sobre los riesgos a los que se exponen cada vez que se conectan a
          Internet.
        </p>
        <p>
          Te invitamos a que junto a tu niño/a a cargo relices el siguiente test
          como primer paso de la experiencia que te espera en nuestro sitio.
        </p>
        <button className="btn1">Realizar test</button>
        <img
          src={coheteImg}
          alt="cohete ilustrativo"
          className={cohete ? "visible" : "hidden"}
        />
      </div>
      <div className="decoration-section">
        <DetrasDelProyecto />
        <div className="circle"></div>
      </div>
    </header>
  );
};

export default Header;
