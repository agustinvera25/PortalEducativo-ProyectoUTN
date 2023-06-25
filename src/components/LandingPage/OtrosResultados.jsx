const OtrosResultados = () => {
  return (
    <section className="resultados-section">
        <span className="subtitle">Otros datos importantes</span>
        <h2 className="title">Mas resultados de nuestra encuesta</h2>
        <div className="cards-container">
            <article className="investigacion-card">
                <span>40%</span>
                <p>De los adultos a cargo de niños/as no saben que sitios consumen a diario.</p>
            </article>
            <article className="investigacion-card">
                <span>90%</span>
                <p>De los responsables encuestados dijeron que les seria útil una herramienta como NombreXD</p>
            </article>
            <article className="investigacion-card">
                <span>6 de 10</span>
                <p>Adolecentes han sufrido ciberacoso, en algunos casos ni siquiera son concientes de lo grave y delicado del tema</p>
            </article>
        </div>
    </section>
  )
}

export default OtrosResultados