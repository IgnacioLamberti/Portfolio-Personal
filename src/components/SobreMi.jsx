function SobreMi({ descripcion, ubicacion }) {
  return (
    <section id="sobre-mi" className="seccion">
      <p className="etiqueta">Sobre mi</p>
      <p className="descripcion">{descripcion}</p>
      <p className="ubicacion">📍 {ubicacion}</p>
    </section>
  );
}

export default SobreMi;