import ciberheroesLogo from "../../assets/images/ciberheros.png";

const SobreProyecto = () => {
  return (
    <section className="nostros-section proyecto">
      <div className="text-section">
        <h2 className="title">Sobre el proyecto</h2>
        <span className="subtitle">Ciberhéroes</span>
        <div className="text">
          <img src={ciberheroesLogo} alt="Ciberheroes" />
          <div className="info">
            <p>
              Nuestra misión es informar y prevenir los ciberdelitos que afectan
              a niños y adolescentes, como el grooming, el bullying y el acoso.
              Estamos comprometidos con la seguridad digital y creemos que es
              fundamental educar tanto a los padres como a los chicos sobre los
              riesgos en línea y cómo enfrentarlos de manera responsable.
            </p>
            <p>
              Tenemos una visión clara de un mundo virtual seguro para todos,
              donde los padres estén capacitados para proteger a sus hijos y los
              niños sean conscientes de los peligros y sepan cómo mantenerse a
              salvo. Queremos fomentar una relación saludable entre padres e
              hijos en el ámbito digital, donde la confianza, el diálogo abierto
              y el respeto sean los pilares fundamentales.
            </p>
            <p>
              En nuestra página web encontrarás recursos educativos, juegos
              interactivos y cuentos que abordan de manera didáctica y amigable
              los temas relacionados con la seguridad en línea. Nos esforzamos
              constantemente por perfeccionar y mejorar nuestra plataforma,
              adaptándola a las necesidades cambiantes de la sociedad y
              manteniéndonos actualizados con las últimas tendencias y desafíos
              en el mundo digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreProyecto;
