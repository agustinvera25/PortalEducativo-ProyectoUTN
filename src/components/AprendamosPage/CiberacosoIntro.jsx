import ciberacosoIlu from '../../assets/ilustaciones/ciberacoso.png'

const CiberacosoIntro = () => {
  return (
    <section className="header ciberacoso-section">
        <div className="text-section">
            <h2>Ciberacoso y ciberbulling</h2>
            <span>Es el acoso o intimidación por medio de las tecnologías digitales. Puede ocurrir en las redes sociales, plataformas de mensajería o de juegos y dispositivos móviles.</span>
            <p>Todos los amigos se hacen bromas, pero hay ocasiones en que es difícil saber si alguien solamente se está divirtiendo o si está tratando de herirte. A veces te dirán, riéndose, que “era solo una broma” o que “no te lo tomes tan en serio”. Pero si te sientes herido o piensas que alguien se está riendo de vos y no con vos, entonces la broma ha ido demasiado lejos. Si continúa después de que le hayas pedido a esa persona que no lo haga más y sigues sintiéndote molesto, podría tratarse de acoso.</p>
        </div>
        <img src={ciberacosoIlu} alt="acostante ilustracion" />
    </section>
  )
}

export default CiberacosoIntro