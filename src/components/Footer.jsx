import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

function Footer({ contacto, nombre, apellido }) {
  return (
    <footer id="contacto" className="footer">
      <p className="etiqueta">Contacto</p>
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
      <p className="copy">© {new Date().getFullYear()} {nombre} {apellido}</p>
    </footer>
  );
}

export default Footer;