// src/components/SideMenu.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function SideMenu() {
  return (
    <aside className="side-menu">
      <div className="logo-container">
      <img src="/happy_faces_logo.png" alt="Happy Faces Logo" className="logo" width="168" height="55" />
      
    
      </div>
      <nav className="menu-links">
        <Link to="/" className="menu-item"><i class="bi bi-house"></i> Inicio</Link>
        <Link to="/challenges" className="menu-item"><i class="bi bi-code-square"></i>Code Challenges</Link>
        <Link to="/courses" className="menu-item"> <i class="bi bi-book"></i>Cursos</Link>
        <Link to="/profile" className="menu-item"><i class="bi bi-person"></i>Perfil</Link>
        <Link to="/leaderboard" className="menu-item"><i class="bi bi-trophy"></i>Leaderboard</Link>
        <Link to="/settings" className="menu-item"><i class="bi bi-gear"></i>Configuración</Link>
        <Link to="/logout" className="menu-item logout"><i class="bi bi-box-arrow-right"></i>Salir</Link>
      </nav>
    </aside>
  );
}

export default SideMenu;