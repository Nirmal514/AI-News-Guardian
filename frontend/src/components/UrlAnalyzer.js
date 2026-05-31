import React, { useState } from "react";
import axios from "axios";

function UrlAnalyzer() {

  const [url, setUrl] = useState("");
  const [urlResult, setUrlResult] = useState(null);
  const [urlLoading, setUrlLoading] = useState(false);

  const analyzeUrl = async () => {

    if (!url) return;

    setUrlLoading(true);

    try {

      const response = await axios.post(
        "http://localhost:8000/analyze-url",
        {
          url: url
        }
      );

      setUrlResult(response.data);

    } catch (error) {

      console.error(error);
      alert("URL Analysis Failed");

    }

    setUrlLoading(false);
  };

  return (

    <div style={{ marginTop: "60px" }}>

      <h1>🌐 Analyze News URL</h1>

      <input
        type="text"
        placeholder="Paste news article URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "1000px",
          padding: "15px",
          borderRadius: "10px",
          fontSize: "16px"
        }}
      />

      <br /><br />

      <button onClick={analyzeUrl}>
        Analyze URL
      </button>

      <br /><br />

      {urlLoading && (
        <h3>Fetching article...</h3>
      )}

      {urlResult && (

        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "20px",
            borderRadius: "12px"
          }}
        >

          <h2>{urlResult.title}</h2>

          <h3>
            Prediction: {urlResult.prediction}
          </h3>

          <h3>
            Confidence: {urlResult.confidence}%
          </h3>

          <h3>🧠 Explanation</h3>

          <p>
            {urlResult.explanation}
          </p>

        </div>

      )}

    </div>

  );
}

export default UrlAnalyzer;