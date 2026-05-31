import React from "react";
import AnalyticsChart from "./AnalyticsChart";

function Dashboard() {

  return (

    <div>

      {/* Hero Section */}

      <div
        style={{
          marginBottom: "40px"
        }}
      >

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#7C3AED"
          }}
        >
          🛡 AI News Guardian
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#CBD5E1"
          }}
        >
          AI-Powered Fake News Detection & Fact Verification Platform
        </p>

      </div>
      <div
  className="card"
  style={{
    width: "100%",
    marginTop: "20px",
    marginBottom: "30px"
  }}
>
  <h2>
    Welcome to AI News Guardian
  </h2>

  <p>
    Analyze text, URLs, images and voice
    inputs using AI-powered fake news
    detection and fact verification.
  </p>
</div>

      {/* Analytics Cards */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "40px"
        }}
      >

        <div className="card">
          <h2
  style={{
    color: "#06B6D4",
    fontSize: "42px"
  }}
>
  146
</h2>
          <p>Total Analyses</p>
        </div>

        <div className="card">
          <h2
  style={{
    color: "#06B6D4",
    fontSize: "42px"
  }}
>
  112
</h2>
          <p>Real News</p>
        </div>

        <div className="card">
          <h2>34</h2>
          <p>Fake News</p>
        </div>

        <div className="card">
          <h2>91%</h2>
          <p>Average Credibility</p>
        </div>

      </div>

      {/* Charts */}

      <AnalyticsChart />

      {/* How It Works */}

      <div
        className="card"
        style={{
          width: "100%",
          marginTop: "40px"
        }}
      >

        <h2>🚀 How It Works</h2>

        <ol
          style={{
            lineHeight: "2"
          }}
        >
          <li>Enter News Text, URL, Image or Voice Input</li>

          <li>AI Extracts and Processes Content</li>

          <li>Fake News Detection Model Analyzes Credibility</li>

          <li>AI Generates Explanation and Summary</li>

          <li>User Receives Trust Score and Report</li>

        </ol>

      </div>

      {/* Technology Stack */}

      <div
        className="card"
        style={{
          width: "100%",
          marginTop: "30px"
        }}
      >

        <h2>⚙️ Technology Stack</h2>

        <ul
          style={{
            lineHeight: "2"
          }}
        >

          <li>Frontend: React.js</li>

          <li>Backend: FastAPI</li>

          <li>AI Model: Gemini AI</li>

          <li>OCR Engine: EasyOCR</li>

          <li>Charts: Chart.js</li>

          <li>PDF Reports: jsPDF</li>

          <li>News Extraction: Newspaper3k</li>

          <li>HTTP Requests: Axios</li>

        </ul>

      </div>

      {/* Features */}

      <div
        className="card"
        style={{
          width: "100%",
          marginTop: "30px"
        }}
      >

        <h2>✨ Platform Features</h2>

        <ul
          style={{
            lineHeight: "2"
          }}
        >

          <li>🧠 AI Fake News Detection</li>

          <li>🌐 News URL Analysis</li>

          <li>📝 AI News Summarization</li>

          <li>✅ Fact Verification</li>

          <li>🤖 AI Assistant Chatbot</li>

          <li>📄 PDF Report Generation</li>

          <li>🖼️ OCR Image Analysis</li>

          <li>🎤 Voice-Based News Analysis</li>

        </ul>

      </div>

    </div>

  );
}

export default Dashboard;