import { useState } from "react";
import Proyecto from "./Proyecto.jsx";

function ListaProyectos({ proyectos, onVerDetalle }) {
  const [filtro, setFiltro] = useState("Todos");

  const todasLasTecnologias = [
    "Todos",
    ...new Set(proyectos.flatMap((p) => p.tecnologias)),
  ];

  const proyectosFiltrados =
    filtro === "Todos"
      ? proyectos
      : proyectos.filter((p) => p.tecnologias.includes(filtro));

  return (
    <section id="proyectos" className="seccion">
      <p className="etiqueta">Proyectos</p>

      <div className="filtros">
        {todasLasTecnologias.map((tec) => (
          <button
            key={tec}
            className={`chip ${filtro === tec ? "chip-activo" : ""}`}
            onClick={() => setFiltro(tec)}
          >
            {tec}
          </button>
        ))}
      </div>

      <div className="grilla-proyectos">
        {proyectosFiltrados.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} onVerDetalle={onVerDetalle} />
        ))}
      </div>
    </section>
  );
}

export default ListaProyectos;