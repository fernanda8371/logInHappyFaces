// src/pages/Home.js
import React from "react";
import SideMenu from "../components/SideMenu";
import "../App.css";

function Home() {
  return (
    <div className="home-container">
      <SideMenu />
      <main className="content">
        <h1>Code Challenges</h1>
        <p>Completa los retos para ganar puntos</p>
        <div className="challenge-grid">
          <ChallengeCard title="Hash Maps" company="TCS" status="upcoming" />
          <ChallengeCard title="Back End" company="Cognizant" status="upcoming" />
          <ChallengeCard title="Arrays" company="Flipkart" status="expired" />
          <ChallengeCard title="Easy" company="ZOHO" status="submitted" />
          <ChallengeCard title="Medium" company="Amazon" status="submitted" />
          <ChallengeCard title="Hard" company="IBM" status="expired" />
        </div>
      </main>
    </div>
  );
}

function ChallengeCard({ title, company, status }) {
  return (
    <div className={`challenge-card ${status}`}>
      <h3>{title}</h3>
      <p>{company}</p>
      <span className={`status-tag ${status}`}>{status}</span>
    </div>
  );
}

export default Home;
