import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../App.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Usuario:", username, "Contraseña:", password);
    alert("Formulario enviado (Solo demostración, no conectado a backend)");
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <LeftSection />
        <RightSection 
          email={email} setEmail={setEmail} 
          username={username} setUsername={setUsername} 
          password={password} setPassword={setPassword} 
          handleSubmit={handleSubmit} 
        />
      </div>
    </div>
  );
}

function LeftSection() {
  return (
    <div className="left-section">
     
      <div className="smiley-face">
        <img src="/left_side_face.svg" alt="Happy Face" />
      </div>
      {/* <button className="retos-btn">Retos</button> */}
    </div>
  );
}

function RightSection({ email, setEmail, username, setUsername, password, setPassword, handleSubmit }) {
  return (
    <div className="right-section">
      <div className="login-box">
        <h2 className="company-logo">
        <img src="tech_mahindra.png" alt="Tech Mahindra Logo" className="logo-image" /> 

        </h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Mail Id" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" required />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" required />
          <button type="submit" className="login-btn">Register</button>
        </form>
        <p className="account-text">
          Have an Account? <Link to="/" className="login-link">Log In</Link>
        </p>
        <p className="signup-text">Or you can Signup with</p>
        <SocialIcons />
        <p className="privacy-text">
          This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="social-icons">
      <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" />
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
      <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" />
    </div>
  );
}

export default SignUp;
