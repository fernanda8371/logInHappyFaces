// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login.js";
import SignUp from "./pages/signup";  // Importa SignUp


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />  // Añade la ruta para SignUp

    </Routes>
  );
}

export default App;
