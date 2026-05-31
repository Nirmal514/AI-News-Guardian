import React, { useState } from "react";
import axios from "axios";

function NewsSummarizer() {

  const [summaryText, setSummaryText] = useState("");
  const [summaryResult, setSummaryResult] = useState(null);
  const [summaryLoading, setSummaryLoading] = useState(false);

  const generateSummary = async () => {

    if (!summaryText) return;

    setSummaryLoading(true);

    try {

      const response = await axios.post(
        "http://localhost:8000/summarize",
        {
          text: summaryText
        }
      );

      setSummaryResult(response.data);

    } catch (error) {

      console.error(error);
      alert("Summary generation failed");

    }

    setSummaryLoading(false);
  };

  return (

    <div style={{ marginTop: "60px" }}>

      <h1>📝 News Summarizer</h1>

      <textarea
        rows="8"
        placeholder="Paste article here..."
        value={summaryText}
        onChange={(e) => setSummaryText(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "1000px",
          padding: "15px",
          borderRadius: "10px",
          fontSize: "16px"
        }}
      />

      <br /><br />

      <button onClick={generateSummary}>
        Generate Summary
      </button>

      <br /><br />

      {summaryLoading && (
        <h3>Generating Summary...</h3>
      )}

      {summaryResult && (

        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "20px",
            borderRadius: "12px"
          }}
        >

          <h2>📝 Summary</h2>

          <p>
            {summaryResult.summary}
          </p>

          <h2>🔑 Key Points</h2>

          <ul>

            {summaryResult.key_points.map((point, index) => (

              <li
                key={index}
                style={{
                  marginBottom: "10px"
                }}
              >
                {point}
              </li>

            ))}

          </ul>

        </div>

      )}

    </div>

  );
}

export default NewsSummarizer;