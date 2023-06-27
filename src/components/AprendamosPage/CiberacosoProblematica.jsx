import mentalIcon from '../../assets/icons/saludMental.png'
import emocionIcon from '../../assets/icons/emocional.png'
import chicaTriste from '../../assets/ilustaciones/problematica.png'

const CiberacosoProblematica = () => {
  return (
    <section className="problematica-section">
        <div className='cards-container'>
            <h2 className="title">¿Cómo puede llegar a afectar?</h2>
            <div>
                <article className="investigacion-card">
                    <img src={mentalIcon} alt="salud mental icon" />
                    <span className="subtitle">Mentalmente</span>
                    <p>Se siente preocupada, avergonzada, nerviosa, ansiosa. Esto puede llevarte a aislarte de tus amigos y familiares, a tener pensamientos negativos y a sentirte culpable por las cosas que has hecho o dejado de hacer.</p>
                </article>
                <article className="investigacion-card">
                    <img src={emocionIcon} alt="emociones icon" />
                    <span className="subtitle">Emocionalmente</span>
                    <p>Se siente avergonzada, estúpida, asustada o enfadada. Es habitual sentirse solo y abrumado. Puedes perder la motivación para llevar a cabo las cosas que normalmente te gustan.</p>
                </article>
            </div>
        </div>
        <div className="image-container">
            <img src={chicaTriste} alt="chica triste" />
            <p>Sentirse objeto de burla o de acoso puede impedir que la víctima hable con franqueza o trate de resolver el problema. En casos extremos, el ciberacoso puede llevar a quitarse la vida.</p>
        </div>
    </section>
  )
}

export default CiberacosoProblematica