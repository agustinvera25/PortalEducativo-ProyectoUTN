import hackingIlu from '../../assets/ilustaciones/hacking.png'

const AprendamosHeader = () => {
  return (
    <header className="header aprendamos-header">
        <img src={hackingIlu} alt="hacking ilustracion" />
        <div className="text-section">
            <h2 className="title">Antes de jugar tenemos que aprender</h2>
            <span className="subtitle">¿Que es la ciberseguridad?</span>
            <p>La ciberseguridad es el conjunto de tareas llevadas a cabo para proteger archivos digitales, así como para acabar con cualquier amenaza que pueda interferir en el acceso no deseado a información confidencial.</p>
        </div>
    </header>
  )
}

export default AprendamosHeader