import React, { useState } from "react";
import axios from "axios";

function FactChecker() {

  const [claim, setClaim] = useState("");
  const [factResult, setFactResult] = useState(null);
  const [factLoading, setFactLoading] = useState(false);

  const factCheck = async () => {

    if (!claim) return;

    setFactLoading(true);

    try {

      const response = await axios.post(
        "http://localhost:8000/fact-check",
        {
          claim: claim
        }
      );

      setFactResult(response.data);

    } catch (error) {

      console.error(error);
      alert("Fact Check Failed");

    }

    setFactLoading(false);
  };

  return (

    <div style={{ marginTop: "60px" }}>

      <h1>✅ Fact Verification</h1>

      <input
        type="text"
        placeholder="Enter claim to verify..."
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "1000px",
          padding: "15px",
          borderRadius: "10px",
          fontSize: "16px"
        }}
      />

      <br /><br />

      <button onClick={factCheck}>
        Verify Claim
      </button>

      <br /><br />

      {factLoading && (
        <h3>Searching trusted sources...</h3>
      )}

      {factResult && (

        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "20px",
            borderRadius: "12px"
          }}
        >

          <h2>Claim</h2>

          <p>{factResult.claim}</p>

          <h2>Trusted Sources</h2>

          {factResult.sources.map((item, index) => (

            <div
              key={index}
              style={{
                marginBottom: "20px",
                borderBottom: "1px solid gray",
                paddingBottom: "10px"
              }}
            >

              <h3>{item.title}</h3>

              <p>
                Source: {item.source}
              </p>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#38bdf8"
                }}
              >
                Read Article
              </a>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default FactChecker;