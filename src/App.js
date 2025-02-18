// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App;
