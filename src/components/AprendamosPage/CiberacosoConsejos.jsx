import consejo1 from '../../assets/ilustaciones/consejo1.png'
import consejo2 from '../../assets/ilustaciones/consejo2.png'
import consejo3 from '../../assets/ilustaciones/consejo3.png'
import consejo4 from '../../assets/ilustaciones/consejo4.png'

const CiberacosoConsejos = () => {
  return (
        <section className="ciberacosoConsejos-section">
            <h2 className="title">Otros consejos</h2>
            <div className="consejos-container">
                <div className="consejo">
                    <p>Cualquiera puede convertirse en víctima de ciberacoso. Si ves que esto le está ocurriendo a alguien que conoces, procura ofrecerle apoyo. Si tu amigo/a aún no desea denunciar el incidente, entonces apóyalo/a tratando de encontrar a un adulto de confianza que pueda ayudarle a afrontar la situación. </p>
                    <img src={consejo1} alt="amigos y conocidos" />
                </div>
                <div className="consejo">
                    <img src={consejo2} alt="amigos y conocidos" />
                    <p>Debemos ser cuidadosos y no compartir o decir cosas que puedan herir a otras personas. Tenemos que ser amables unos con otros en línea y en la vida real. Todos, sin excepción.</p>
                </div>
                <div className="consejo">
                    <p>Piensa dos veces antes de publicar o compartir algo en plataformas digitales y no des detalles personales como tu dirección, tu número telefónico o el nombre de tu escuela.</p>
                    <img src={consejo3} alt="amigos y conocidos" />
                </div>
                <div className="consejo">
                    <img src={consejo4} alt="amigos y conocidos" />
                    <p>Aprende sobre los ajustes de privacidad de tus aplicaciones favoritas para las redes sociales. Puedes decidir quién puede ver tu perfil, enviarte mensajes o comentar tus publicaciones, informar sobre comentarios, mensajes, fotografías y videos hirientes y bloquear completamente a alguien para que no pueda volver a ver tu perfil ni contactarte.</p>
                </div>
            </div>
        </section>
    )
}

export default CiberacosoConsejos