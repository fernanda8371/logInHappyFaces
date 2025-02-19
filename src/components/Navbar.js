// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Importa los estilos específicos de la Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/happy_faces_logo.png" alt="Happy Faces Logo" className="logo" width="168" height="55" />
      <div className="nav-links">
        <Link to="/practice">Practice</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/contact">Contact</Link>

        {/* <Link to="/login">Log In</Link> */}
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;

/* CSS Ajustado para Responsividad */

