import { Sun, Moon, Terminal } from "lucide-react";

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

export default Header;