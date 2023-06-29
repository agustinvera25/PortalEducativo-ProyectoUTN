import pishingIcon from '../../assets/icons/pishing.png'
import groomingIcon from '../../assets/icons/grooming.png'
import sextorsionIcon from '../../assets/icons/sextorsion.png'
import ciberbullyingIcon from '../../assets/icons/ciberbullying.png'
import massnaIcon from '../../assets/icons/massna.png'

const JuegosSelector = () => {
  return (
    <section className="juegosSelector-section">
        <div className="cards-container">
            <article className="investigacion-card">
                <img src={ciberbullyingIcon} alt="icono del tema a tratar" />
                <h2 className="title">Ciberacoso y ciberbullying</h2>
                <span className="subtitle">¡Vamos a jugar!</span>
                <button className="btn1">Rosco de letras</button>
                <button className="btn1">Trivia de preguntas</button>
            </article>
            <article className="investigacion-card">
                <img src={groomingIcon} alt="icono del tema a tratar" />
                <h2 className="title">Grooming</h2>
                <span className="subtitle">¡Más juegos proximamente!</span>
            </article>
            <article className="investigacion-card">
                <img src={massnaIcon} alt="icono del tema a tratar" />
                <h2 className="title">Massna</h2>
                <span className="subtitle">¡Más juegos proximamente!</span>
            </article>
            <article className="investigacion-card">
                <img src={sextorsionIcon} alt="icono del tema a tratar" />
                <h2 className="title">Sextorsion</h2>
                <span className="subtitle">¡Más juegos proximamente!</span>
            </article>
            <article className="investigacion-card">
                <img src={pishingIcon} alt="icono del tema a tratar" />
                <h2 className="title">Pishing</h2>
                <span className="subtitle">¡Más juegos proximamente!</span>
            </article>
        </div>
    </section>
  )
}

export default JuegosSelector