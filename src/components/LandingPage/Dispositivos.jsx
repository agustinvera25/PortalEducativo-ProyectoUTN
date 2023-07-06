import checkIcon from "../../assets/icons/check.png";
import grafico from "../../assets/images/graficoDispositivos.png";

const Dispositivos = () => {
  return (
    <section className="header dispositivos-section">
      <div className="decoration-section">
        <img src={grafico} alt="graficos dispositivos" />
      </div>
      <div className="text-section">
        <span className="subtitle">Dispositivos de conexión habituales</span>
        <h2 className="title">
          ¿Que dispositivos suelen ser los habitales para acceder a internet?
        </h2>
        <p>
          Nuestra encuesta nos dio como resultado que los dispositivos mas
          utilizados por los/las niños/as para acceder a internet son los
          dispositivos moviles y las PC. De estos datos pudimos llegar a dos
          conclusiones:
        </p>
        <div className="punto">
          <div className="check">
            <img src={checkIcon} alt="check icon" />
          </div>
          <span>
            <b>Que el proyecto sea una pagina web: </b>Facil acceso tanto desde
            dispositivos moviles como desde computadoras
          </span>
        </div>
        <div className="punto">
          <div className="check">
            <img src={checkIcon} alt="check icon" />
          </div>
          <span>
            <b>La importancia de que la web sea responsive: </b>Teniendo en
            cuenta que las tablets tambien son de los dispositivos mas usados,
            es muy importante que la web se adapte a los dispositivos
          </span>
        </div>
        <a className="btn1" href="/aprendamosjugando">Aprendamos jugando</a>
      </div>
    </section>
  );
};

export default Dispositivos;
