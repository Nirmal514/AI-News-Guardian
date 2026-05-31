import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import NewsDetector from "./components/NewsDetector";
import UrlAnalyzer from "./components/UrlAnalyzer";
import NewsSummarizer from "./components/NewsSummarizer";
import FactChecker from "./components/FactChecker";
import ChatBot from "./components/ChatBot";
import ImageAnalyzer from "./components/ImageAnalyzer";
import VoiceAnalyzer from "./components/VoiceAnalyzer";
import "./App.css";

function App() {

  const [activePage, setActivePage] =
    useState("dashboard");

  const renderPage = () => {

    switch (activePage) {

      case "dashboard":
        return <Dashboard />;

      case "detector":
        return <NewsDetector />;

      case "url":
        return <UrlAnalyzer />;

      case "summary":
        return <NewsSummarizer />;

      case "verify":
        return <FactChecker />;

      case "chat":
        return <ChatBot />;

      case "image":
        return <ImageAnalyzer />;
      case "voice":
        return <VoiceAnalyzer />;

      default:
        return <Dashboard />;
    }
  };

  return (

    <div className="app-container">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main-content">
        <footer
  style={{
    marginTop: "60px",
    textAlign: "center",
    color: "#94A3B8"
  }}
>
  © 2026 AI News Guardian | Built with React & FastAPI
</footer>

        {renderPage()}

      </div>

    </div>

  );
}

export default App;