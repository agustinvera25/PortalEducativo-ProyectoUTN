import listaAlumnos from "../assets/listaAlumnos"

const DetrasDelProyecto = () => {
  return (
    <article className="detras-del-proyecto">
        <h2>Detras del proyecto</h2>
        <div className="contenedor-alumnos">
            {listaAlumnos.map(alumno => (
               <div className="alumno" key={alumno.nombre}>
                    <img src={alumno.foto} alt="alumno retrato" />
                    <span>{alumno.nombre}</span>
               </div>  
            ))}
        </div>
        <button className="btn1">Sobre nosotros</button>
    </article>
  )
}

export default DetrasDelProyecto