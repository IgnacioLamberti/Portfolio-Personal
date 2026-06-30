function Tecnologias({ lista }) {
  return (
    <section id="tecnologias" className="seccion">
      <p className="etiqueta">Tecnologias</p>
      <div className="grupo-badges">
        {lista.map((tec) => (
          <span key={tec} className="badge">
            {tec}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Tecnologias;