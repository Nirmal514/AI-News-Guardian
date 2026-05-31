import { generatePDF }
from "./ReportGenerator";
import React, { useState } from "react";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";
function NewsDetector() {

  const [news, setNews] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeNews = async () => {

    if (!news.trim()) {
      alert("Please enter news content");
      return;
    }

    setLoading(true);

    try {

      const response = await axios.post(
        "http://localhost:8000/detect",
        {
          text: news
        }
      );

      setResult(response.data);

    } catch (error) {

      console.error(error);

      alert(
        "Failed to connect with backend"
      );

    }

    setLoading(false);
  };

  return (

    <div
      style={{
        marginBottom: "50px"
      }}
    >

      <h1>🧠 AI Fake News Detector</h1>

      <textarea
        rows="8"
        placeholder="Paste news article here..."
        value={news}
        onChange={(e) =>
          setNews(e.target.value)
        }
        style={{
          width: "100%",
          maxWidth: "1000px",
          padding: "15px",
          borderRadius: "10px",
          fontSize: "16px"
        }}
      />

      <br />
      <br />

      <button
        onClick={analyzeNews}
        style={{
          padding: "12px 25px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Analyze News
      </button>

      <br />
      <br />

      {loading && (
        <h3>
          🔍 Analyzing News...
        </h3>
      )}

      {result && (

        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "20px",
            maxWidth: "1000px"
          }}
        >

          <h2>
            Prediction:
            {" "}
            {result.prediction}
          </h2>

          <h3>
            Confidence:
            {" "}
            {result.confidence}%
          </h3>

          <h3>
            🧠 AI Explanation
          </h3>

          <TypeAnimation
  sequence={[result.explanation]}
  speed={75}
  cursor={true}
  repeat={0}
/>
          <br />

<button
  onClick={() =>
    generatePDF(result)
  }
  style={{
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#7C3AED",
    color: "white"
  }}
>
  📄 Download PDF Report
</button>

          {result.credibility && (

            <div
              style={{
                marginTop: "20px",
                backgroundColor: "#0f172a",
                padding: "15px",
                borderRadius: "10px"
              }}
            >

              <h3>
                📊 Credibility Score
              </h3>

              <h2>
                {result.credibility.score}
                /100
              </h2>

              <h3>
                {result.credibility.rating}
              </h3>

              <hr />

              <p>
                Prediction Score:
                {" "}
                {
                  result.credibility
                    .details
                    ?.prediction_score
                }
              </p>

              <p>
                Quality Score:
                {" "}
                {
                  result.credibility
                    .details
                    ?.quality_score
                }
              </p>

              <p>
                Bias Score:
                {" "}
                {
                  result.credibility
                    .details
                    ?.bias_score
                }
              </p>

            </div>

          )}

        </div>

      )}

    </div>

  );
}

export default NewsDetector;