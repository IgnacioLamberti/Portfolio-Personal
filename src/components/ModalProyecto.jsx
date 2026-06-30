import { X, ExternalLink } from "lucide-react";

function ModalProyecto({ proyecto, onCerrar }) {
  if (!proyecto) return null;

  return (
    <div className="fondo-modal" onClick={onCerrar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="boton-cerrar" onClick={onCerrar} aria-label="Cerrar">
          <X size={18} />
        </button>
        <img src={proyecto.imagen} alt={proyecto.titulo} className="imagen-modal" />
        <h3>{proyecto.titulo}</h3>
        <p>{proyecto.descripcion}</p>
        <div className="grupo-badges">
          {proyecto.tecnologias.map((tec) => (
            <span key={tec} className="badge badge-chico">{tec}</span>
          ))}
        </div>
        <a className="boton-primario" href={proyecto.link} target="_blank" rel="noreferrer">
          Ir al repositorio <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

export default ModalProyecto;