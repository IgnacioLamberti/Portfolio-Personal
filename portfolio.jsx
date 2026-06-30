import React, { useState } from "react";
import { Github, Linkedin, Mail, MessageCircle, ExternalLink, Moon, Sun, X, Terminal } from "lucide-react";

/* =========================================================
   DATOS (simulan lo que en un caso real vendría de una API,
   una base de datos o un archivo de configuración)
   ========================================================= */

const datosPersonales = {
  nombre: "Ada Lovelace",
  apellido: "Pérez",
  profesion: "Analista de Sistemas / Desarrolladora Frontend",
  avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Ada&backgroundColor=14b8a6",
  descripcion:
    "Analista de sistemas en formación, enfocada en construir interfaces claras y prolijas. Me interesa entender cómo funciona cada pieza del software, no solo usarla.",
  ubicacion: "Córdoba, Argentina",
};

const tecnologias = [
  "JavaScript", "React", "HTML5", "CSS3", "Git", "Node.js", "SQL", "Python",
];

const listaDeProyectos = [
  {
    id: 1,
    titulo: "Gestor de Tareas",
    descripcion:
      "Aplicación para crear, editar y organizar tareas por prioridad, con persistencia local y filtros dinámicos.",
    tecnologias: ["React", "JavaScript", "CSS3"],
    link: "https://github.com/",
    imagen: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
  },
  {
    id: 2,
    titulo: "API de Inventario",
    descripcion:
      "Backend para gestionar stock de un comercio, con endpoints REST documentados y validación de datos.",
    tecnologias: ["Node.js", "SQL"],
    link: "https://github.com/",
    imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id: 3,
    titulo: "Analizador de Datos",
    descripcion:
      "Script que procesa archivos CSV, calcula estadísticas básicas y genera gráficos automáticos.",
    tecnologias: ["Python", "SQL"],
    link: "https://github.com/",
    imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id: 4,
    titulo: "Landing de Portfolio",
    descripcion:
      "Sitio de presentación profesional, responsive, con modo claro/oscuro y animaciones suaves.",
    tecnologias: ["React", "CSS3", "HTML5"],
    link: "https://github.com/",
    imagen: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
  },
];

const datosContacto = {
  email: "ada.perez@correo.com",
  linkedin: "https://linkedin.com/in/ada-perez",
  github: "https://github.com/ada-perez",
  whatsapp: "https://wa.me/5490000000000",
};

/* =========================================================
   COMPONENTE: Header
   Recibe props para no tener el nombre/profesión/foto
   "hardcodeados" dentro del componente.
   ========================================================= */
function Header({ nombre, apellido, profesion, avatar, tema, onCambiarTema }) {
  return (
    <header className="header">
      <div className="header-contenido">
        <div className="header-marca">
          <Terminal size={18} />
          <span>portfolio.jsx</span>
        </div>
        <button className="boton-tema" onClick={onCambiarTema} aria-label="Cambiar tema">
          {tema === "oscuro" ? <Sun size={18} /> : <Moon size={18} />}
          {tema === "oscuro" ? "Modo claro" : "Modo oscuro"}
        </button>
      </div>

      <div className="header-hero">
        <img src={avatar} alt={`Avatar de ${nombre}`} className="avatar" />
        <h1 className="nombre">
          {nombre} <span className="apellido">{apellido}</span>
        </h1>
        <p className="profesion">{profesion}</p>
      </div>
    </header>
  );
}

/* =========================================================
   COMPONENTE: SobreMi
   ========================================================= */
function SobreMi({ descripcion, ubicacion }) {
  return (
    <section id="sobre-mi" className="seccion">
      <p className="etiqueta">// sobre-mi</p>
      <p className="descripcion">{descripcion}</p>
      <p className="ubicacion">📍 {ubicacion}</p>
    </section>
  );
}

/* =========================================================
   COMPONENTE: Tecnologias
   ========================================================= */
function Tecnologias({ lista }) {
  return (
    <section id="tecnologias" className="seccion">
      <p className="etiqueta">// tecnologias</p>
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

/* =========================================================
   COMPONENTE: Proyecto (REUTILIZABLE)
   Cada tarjeta de proyecto es la MISMA función de componente,
   pero pintada con datos distintos a través de props.
   ========================================================= */
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

/* =========================================================
   COMPONENTE: ListaProyectos
   Renderiza muchos <Proyecto /> a partir de un arreglo,
   y maneja el filtro por tecnología (bonus).
   ========================================================= */
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
      <p className="etiqueta">// proyectos</p>

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

/* =========================================================
   COMPONENTE: ModalProyecto (bonus)
   ========================================================= */
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

/* =========================================================
   COMPONENTE: Footer
   ========================================================= */
function Footer({ contacto }) {
  return (
    <footer id="contacto" className="footer">
      <p className="etiqueta">// contacto</p>
      <div className="enlaces-contacto">
        <a href={`mailto:${contacto.email}`} className="enlace-contacto">
          <Mail size={16} /> {contacto.email}
        </a>
        <a href={contacto.linkedin} target="_blank" rel="noreferrer" className="enlace-contacto">
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href={contacto.github} target="_blank" rel="noreferrer" className="enlace-contacto">
          <Github size={16} /> GitHub
        </a>
        <a href={contacto.whatsapp} target="_blank" rel="noreferrer" className="enlace-contacto">
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
      <p className="copy">© {new Date().getFullYear()} {datosPersonales.nombre} {datosPersonales.apellido}</p>
    </footer>
  );
}

/* =========================================================
   COMPONENTE PRINCIPAL: App
   ========================================================= */
export default function App() {
  const [tema, setTema] = useState("oscuro");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  function alternarTema() {
    setTema((temaActual) => (temaActual === "oscuro" ? "claro" : "oscuro"));
  }

  return (
    <div className={`app tema-${tema}`}>
      <EstilosGlobales />

      <Header
        nombre={datosPersonales.nombre}
        apellido={datosPersonales.apellido}
        profesion={datosPersonales.profesion}
        avatar={datosPersonales.avatar}
        tema={tema}
        onCambiarTema={alternarTema}
      />

      <main className="contenedor">
        <SobreMi
          descripcion={datosPersonales.descripcion}
          ubicacion={datosPersonales.ubicacion}
        />
        <Tecnologias lista={tecnologias} />
        <ListaProyectos
          proyectos={listaDeProyectos}
          onVerDetalle={setProyectoSeleccionado}
        />
      </main>

      <Footer contacto={datosContacto} />

      <ModalProyecto
        proyecto={proyectoSeleccionado}
        onCerrar={() => setProyectoSeleccionado(null)}
      />
    </div>
  );
}

/* =========================================================
   ESTILOS (CSS plano dentro de un <style>, con variables
   para soportar el tema claro/oscuro)
   ========================================================= */
function EstilosGlobales() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600&display=swap');

      .app {
        --fondo: #0D1117;
        --fondo-tarjeta: #161B22;
        --borde: #21262D;
        --texto: #E6EDF3;
        --texto-tenue: #8B949E;
        --acento: #5EEAD4;
        --acento-2: #F2C14E;
        font-family: 'Inter', sans-serif;
        background: var(--fondo);
        color: var(--texto);
        min-height: 100vh;
        transition: background 0.3s ease, color 0.3s ease;
      }
      .app.tema-claro {
        --fondo: #F4F1EA;
        --fondo-tarjeta: #FFFFFF;
        --borde: #E2DFD6;
        --texto: #1C1B1A;
        --texto-tenue: #5C5A55;
        --acento: #0E7C7B;
        --acento-2: #B45309;
      }
      * { box-sizing: border-box; }
      .etiqueta {
        font-family: 'Space Mono', monospace;
        color: var(--acento);
        font-size: 0.85rem;
        margin-bottom: 0.75rem;
      }
      .header { padding: 1.5rem 1.25rem 3rem; border-bottom: 1px solid var(--borde); }
      .header-contenido { display: flex; justify-content: space-between; align-items: center; max-width: 960px; margin: 0 auto 2rem; }
      .header-marca { display: flex; align-items: center; gap: 0.4rem; font-family: 'Space Mono', monospace; color: var(--texto-tenue); font-size: 0.9rem; }
      .boton-tema { display: flex; align-items: center; gap: 0.4rem; background: var(--fondo-tarjeta); border: 1px solid var(--borde); color: var(--texto); padding: 0.5rem 0.9rem; border-radius: 999px; cursor: pointer; font-size: 0.85rem; }
      .boton-tema:hover { border-color: var(--acento); }
      .header-hero { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.5rem; max-width: 960px; margin: 0 auto; }
      .avatar { width: 96px; height: 96px; border-radius: 50%; border: 2px solid var(--acento); margin-bottom: 0.5rem; }
      .nombre { font-family: 'Space Mono', monospace; font-size: 2rem; margin: 0; }
      .apellido { color: var(--acento); }
      .profesion { color: var(--texto-tenue); margin: 0; }

      .contenedor { max-width: 960px; margin: 0 auto; padding: 2.5rem 1.25rem; display: flex; flex-direction: column; gap: 3rem; }
      .seccion { display: flex; flex-direction: column; }
      .descripcion { line-height: 1.6; max-width: 640px; }
      .ubicacion { color: var(--texto-tenue); font-size: 0.9rem; }

      .grupo-badges { display: flex; flex-wrap: wrap; gap: 0.5rem; }
      .badge { background: var(--fondo-tarjeta); border: 1px solid var(--borde); color: var(--texto); padding: 0.4rem 0.8rem; border-radius: 6px; font-family: 'Space Mono', monospace; font-size: 0.8rem; }
      .badge-chico { font-size: 0.7rem; padding: 0.25rem 0.6rem; }

      .filtros { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; }
      .chip { background: transparent; border: 1px solid var(--borde); color: var(--texto-tenue); padding: 0.4rem 0.9rem; border-radius: 999px; cursor: pointer; font-size: 0.8rem; }
      .chip-activo { background: var(--acento); color: var(--fondo); border-color: var(--acento); font-weight: 600; }

      .grilla-proyectos { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
      .tarjeta-proyecto { background: var(--fondo-tarjeta); border: 1px solid var(--borde); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; }
      .imagen-proyecto { width: 100%; height: 140px; object-fit: cover; }
      .cuerpo-proyecto { padding: 1rem; display: flex; flex-direction: column; gap: 0.6rem; }
      .cuerpo-proyecto h3 { margin: 0; font-family: 'Space Mono', monospace; }
      .cuerpo-proyecto p { margin: 0; color: var(--texto-tenue); font-size: 0.9rem; line-height: 1.4; }
      .acciones-proyecto { display: flex; gap: 0.6rem; margin-top: 0.4rem; }
      .boton-primario, .boton-secundario { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.5rem 0.9rem; border-radius: 8px; font-size: 0.8rem; text-decoration: none; cursor: pointer; border: 1px solid transparent; }
      .boton-primario { background: var(--acento); color: var(--fondo); font-weight: 600; }
      .boton-secundario { background: transparent; border-color: var(--borde); color: var(--texto); }

      .fondo-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; padding: 1rem; z-index: 50; }
      .modal { background: var(--fondo-tarjeta); border: 1px solid var(--borde); border-radius: 12px; max-width: 420px; width: 100%; padding: 1.25rem; position: relative; display: flex; flex-direction: column; gap: 0.6rem; }
      .boton-cerrar { position: absolute; top: 0.75rem; right: 0.75rem; background: transparent; border: none; color: var(--texto-tenue); cursor: pointer; }
      .imagen-modal { width: 100%; height: 160px; object-fit: cover; border-radius: 8px; }

      .footer { border-top: 1px solid var(--borde); padding: 2rem 1.25rem; max-width: 960px; margin: 0 auto; }
      .enlaces-contacto { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem; }
      .enlace-contacto { display: flex; align-items: center; gap: 0.4rem; color: var(--texto); text-decoration: none; font-size: 0.9rem; }
      .enlace-contacto:hover { color: var(--acento); }
      .copy { color: var(--texto-tenue); font-size: 0.8rem; }

      @media (max-width: 640px) {
        .grilla-proyectos { grid-template-columns: 1fr; }
        .header-contenido { flex-direction: column; gap: 1rem; }
      }
    `}</style>
  );
}