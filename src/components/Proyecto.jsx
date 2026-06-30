import { ExternalLink } from "lucide-react";

function Proyecto({ proyecto, onVerDetalle }) {
  return (
    <article className="tarjeta-proyecto">
      <img src={proyecto.imagen} alt={proyecto.titulo} className="imagen-proyecto" />
      <div className="cuerpo-proyecto">
        <h3>{proyecto.titulo}</h3>
        <p>{proyecto.descripcion}</p>
        <div className="grupo-badges">
          {proyecto.tecnologias.map((tec) => (
            <span key={tec} className="badge badge-chico">
              {tec}
            </span>
          ))}
        </div>
        <div className="acciones-proyecto">
          <button className="boton-secundario" onClick={() => onVerDetalle(proyecto)}>
            Ver detalle
          </button>
          <a className="boton-primario" href={proyecto.link} target="_blank" rel="noreferrer">
            Repositorio <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default Proyecto;