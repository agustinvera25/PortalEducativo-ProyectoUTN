import quehacer1 from '../../assets/ilustaciones/quehacer1.png'
import quehacer2 from '../../assets/ilustaciones/quehacer2.png'
import quehacer3 from '../../assets/ilustaciones/quehacer3.png'
import quehacer4 from '../../assets/ilustaciones/quehacer4.png'

const CiberacosoQueHacer = () => {
  return (
    <section className="ciberacosoQueHacer-section">
        <h2 className="title">¿Qué debo hacer ante una situación de ciberacoso o ciberbulling?</h2>
        <div className="cards-container">
            <div className="quehacer-card">
                <img src={quehacer1} alt="familia y amigos" />
                <p>Busca a alguien de confianza y con la responsabilidad suficiente para ayudarte.</p>
            </div>
            <div className="quehacer-card">
                <img src={quehacer2} alt="empresas de redes sociales" />
                <p>En caso de una plataforma social, piensa en la posibilidad de bloquearlo. Las redes sociales tienen la obligación de velar por la seguridad de sus usuarios.</p>
            </div>
            <div className="quehacer-card">
                <img src={quehacer3} alt="Rejuntar pruebas" />
                <p>Reúne pruebas: mensajes de texto y capturas de pantalla para mostrar lo que está ocurriendo.</p>
            </div>
            <div className="quehacer-card">
                <img src={quehacer4} alt="policia" />
                <p>Para que el acoso se detenga, no solo hay que detectarlo. Es fundamental denunciarlo. Si te encuentras en peligro inminente, debes comunicarte con la Policía.</p>
            </div>
        </div>
    </section>
  )
}

export default CiberacosoQueHacer