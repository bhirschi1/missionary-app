import React from "react";
import { Link } from "react-router-dom";
import missionaryPhoto from "./missionary_photo.jpg";

const Home = () => {
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <section
          style={{
            maxWidth: "600px",
            margin: "50px",
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
              to="Custom-page"
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

        {/* Add the ChatBase iframe on the bottom right corner */}
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            zIndex: 9999,
          }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/kepTLfFX9sDgwQiFEOvH6"
            width="300px"
            style={{ height: "400px", minHeight: "700px" }}
            frameBorder="0"
            title="ChatBaseIframe"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
