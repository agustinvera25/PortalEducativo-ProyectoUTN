import { useEffect, useState } from "react";

const Test = () => {
    const [visible, setVisible] = useState(false)

    useEffect(()=> setVisible(true), [])
  return (
    <section className="test-section">
      <div className={visible ? 'circle visible' : 'circle'}></div>
      <div className={visible ? 'inicio-test visible': 'inicio-test'}>
        <h2>¿Estas listo?</h2>
        <p>
          ¿Preparado? Pídele a tu niño/a a cargo que responda las preguntas del
          siguiente cuestionario. Al acabar el test, sumaremos los puntos en
          base a lo respondido y te daremos un veredicto sobre lo peligrosas o
          seguras que son las prácticas de tu hijo al navegar por Internet.
        </p>
        <button className="btn1">Empezar test</button>
      </div>
    </section>
  );
};

export default Test;
