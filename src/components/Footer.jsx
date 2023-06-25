import faceIcon from "../assets/icons/facebook.png";
import instaIcon from "../assets/icons/instagram.png";
import twitIcon from "../assets/icons/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="sobre-laweb">
          <h2 className="navbar-logo">
            Nombre<span>XD</span>
          </h2>
          <p>
            Esta web app gratuita tiene como finalidad sugerir estrategias
            tendientes a brindar acompañamiento a estos niños y adolescentes y
            minimizar los riesgos, ya que no tienen la edad suficiente para
            discernir entre entretenimiento, adicción, riesgos, usos y abusos.
          </p>
        </div>
      </div>
      <div className="footer-nav">
        <div className="acciones">
          <h3>Acciones</h3>
          <a href="/test">Test evaluativo</a>
          <a href="/aprendamosjugando">Aprendamos jugando</a>
          <a href="/contacto">Contacto</a>
        </div>
        <div className="creadores">
          <h3>Creadores</h3>
          <a href="/nosotros">Sobre nosotros</a>
        </div>
        <div className="explorar">
          <h3>Explorar</h3>
          <a href="/terms">Terms and Conds</a>
          <a href="/police">Privacy police</a>
          <a href="/cookies">Cookies</a>
        </div>
        <div className="redes">
          <h3>Redes Sociales</h3>
          <div className="icons-container">
            <a href="#">
              <img src={faceIcon} alt="facebook" />
            </a>
            <a href="#">
              <img src={instaIcon} alt="instagram" />
            </a>
            <a href="#">
              <img src={twitIcon} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
