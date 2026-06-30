import { useState } from "react";
import Header from "./components/Header.jsx";
import SobreMi from "./components/SobreMi.jsx";
import Tecnologias from "./components/Tecnologias.jsx";
import ListaProyectos from "./components/ListaProyectos.jsx";
import ModalProyecto from "./components/ModalProyecto.jsx";
import Footer from "./components/Footer.jsx";
import { datosPersonales, tecnologias, listaDeProyectos, datosContacto } from "./data/datos.js";

export default function App() {
  const [tema, setTema] = useState("oscuro");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  function alternarTema() {
    setTema((temaActual) => (temaActual === "oscuro" ? "claro" : "oscuro"));
  }

  return (
    <div className={`app tema-${tema}`}>
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

      <Footer
        contacto={datosContacto}
        nombre={datosPersonales.nombre}
        apellido={datosPersonales.apellido}
      />

      <ModalProyecto
        proyecto={proyectoSeleccionado}
        onCerrar={() => setProyectoSeleccionado(null)}
      />
    </div>
  );
}