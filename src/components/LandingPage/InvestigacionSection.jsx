import ciberneticoIcon from '../../assets/images/cibernetico.png'
import afectadosIcon from '../../assets/images/ninos.png'
import responsablesIcon from '../../assets/images/padres.png'

const InvestigacionSection = () => {
  return (
    <section className="investigaciones-section">
        <span>Nuestras Investigaciones</span>
        <h2>¿Por qué es necesario que sus hijos/as sepan de ciberseguridad?</h2>
        <div className="cards-container">
            <article className="investigacion-card">
                <img src={ciberneticoIcon} alt="icon" />
                <h4>Ataques cibernéticos</h4>
                <p>Los ataques cibernéticos se clasificaron como el quinto riesgo más alto en 2021 y se convirtieron en el nuevo estándar para los sectores público y privado. Esta industria de alto riesgo seguirá creciendo y se espera que duplique para 2025</p>
            </article>
            <article className="investigacion-card">
                <img src={afectadosIcon} alt="icon" />
                <h4>Los más afectados</h4>
                <p>Unicamente en nuestra ciudad (San Rafael, Mendoza) en los ultimos años se han iniciado mas de 145 investigaciones relacionadas a material de abuso sexual infantil y ciberacoso sexual infantil donde la edad de la victima promedia entre los 10 y 12 años y la de los atacantes entre 40 y 50 años</p>
            </article>
            <article className="investigacion-card">
                <img src={responsablesIcon} alt="icon" />
                <h4>El responsable por el/la niño/a</h4>
                <p>Sabemos lo dificil que puede ser para un padre, madre o tutor estar pendiente todo el tiempo de lo que el/la niño/a consume en internet. Por eso consideramos que es necesario que ellos sepan y tomen dimensión de los peligros a los que estan expuestos.</p>
            </article>
        </div>
        <button className="btn1">Realizar test</button>
    </section>
  )
}

export default InvestigacionSection