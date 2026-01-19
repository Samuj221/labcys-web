import { NavLink } from "react-router-dom";
import "../styles/theme.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LABCYS</div>
      <div className="links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/servicios">Servicios</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
