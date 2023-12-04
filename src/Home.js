// Home.js
//this si a comment
import React from "react";
import { Link } from "react-router-dom";
import missionaryPhoto from "./missionary_photo.jpg";

function Home() {
  return (
    <div>
      <header
        style={{
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "1em",
        }}
      >
        <h1>Missionary Health</h1>
      </header>

      <section
        style={{
          maxWidth: "1000px",
          margin: "50px auto",
          padding: "40px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2>Welcome to Missionary Health</h2>
        <p>Ensuring the well-being of missionaries worldwide.</p>
        <img src={missionaryPhoto} alt="Missionaries" />
        <p style={{ textAlign: "center" }}>
          If you are unsure where to start, please take our health survey:
        </p>
        <div style={{ textAlign: "center" }}>
          <Link
            to="/survey"
            style={{
              display: "inline-block",
              padding: "15px 30px",
              color: "#fff",
              textDecoration: "none",
              backgroundColor: "#007BFF",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
          >
            Take the Survey
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
