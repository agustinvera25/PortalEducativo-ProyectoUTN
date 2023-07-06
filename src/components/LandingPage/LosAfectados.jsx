import graficoEdades from '../../assets/images/graficoEdades.png'

const LosAfectados = () => {
  return (
    <section className="header afectados-section">
      <div className="text-section">
        <span className='subtitle'>Los mas afectados</span>
        <h2 className='title'>Las edades mas expuestas según nuestra encuesta</h2>
        <p>
          Realizamos encuestas locales las cuales dejaron en evidencia que los
          rangos etarios mas afectados por nuestra problematica son de 8 a 12
          años y mayores de 12 años.
        </p>
        <a className="btn1" href='/aprendamosjugando'>Aprendamos jugando</a>
      </div>
      <div className="decoration-section">
        <img src={graficoEdades} alt="grafico edades" />
        <div className="circle"></div>
      </div>
    </section>
  );
};

export default LosAfectados;
