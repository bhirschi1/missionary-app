import React, { useState } from "react";
import { Link } from "react-router-dom";
import missionaryPhoto from "./missionary_photo.jpg";

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div
      style={{
        backgroundColor: "#444",
        minHeight: "100vh",
        paddingBottom: "20px",
      }}
    >
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
          <img
            src={missionaryPhoto}
            alt="Missionaries"
            style={{ maxWidth: "100%" }}
          />
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            {" "}
            {/* Increased font size */}
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
      </div>

      {/* Collapsible Chatbot */}
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 9999,
        }}
      >
        {showChatbot ? (
          <div>
            <button
              onClick={toggleChatbot}
              style={{
                padding: "10px 20px",
                color: "#fff",
                backgroundColor: "#007BFF",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              Hide Chatbot
            </button>
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/kepTLfFX9sDgwQiFEOvH6"
              width="300px"
              style={{ height: "400px", minHeight: "700px" }}
              frameBorder="0"
              title="ChatBaseIframe"
            ></iframe>
          </div>
        ) : (
          <button
            onClick={toggleChatbot}
            style={{
              padding: "10px 20px",
              color: "#fff",
              backgroundColor: "#007BFF",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Show Chatbot
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
