// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login.js";
import SignUp from "./pages/signup";  // Importa SignUp
import Home from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}></Route>
      <Route path="/" element={<Login />} />
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />  // Añade la ruta para SignUp
      <Route path="/home" element={<Home />} />

    </Routes>
  );
}

export default App;
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Login />} />
//         <Route path="login" element={<Login />} />
//         <Route path="signup" element={<SignUp />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;