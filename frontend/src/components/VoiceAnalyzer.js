import React, { useState } from "react";
import axios from "axios";

function VoiceAnalyzer() {

  const [transcript, setTranscript] =
    useState("");

  const [result, setResult] =
    useState(null);

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  const startListening = () => {

    if (!SpeechRecognition) {

      alert(
        "Speech Recognition not supported in this browser"
      );

      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = async (event) => {

      const text =
        event.results[0][0].transcript;

      setTranscript(text);

      try {

        const response =
          await axios.post(
            "http://localhost:8000/detect",
            {
              text: text
            }
          );

        setResult(response.data);

      } catch (error) {

        console.error(error);

      }

    };
  };

  return (

    <div>

      <h1>
        🎤 Voice News Analysis
      </h1>

      <button
        onClick={startListening}
      >
        Start Speaking
      </button>

      <br />
      <br />

      <h3>
        Speech Text
      </h3>

      <p>
        {transcript}
      </p>

      {result && (

        <div
          style={{
            background:
              "#1e293b",
            padding: "20px",
            borderRadius: "15px"
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

          <p>
            {result.explanation}
          </p>

        </div>

      )}

    </div>

  );
}

export default VoiceAnalyzer;