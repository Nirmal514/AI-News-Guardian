import React, { useState } from "react";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

function ChatBot() {

  const [question, setQuestion] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  const askAI = async () => {

    if (!question.trim()) {
      alert("Please enter a question");
      return;
    }

    setChatLoading(true);

    try {

      const response = await axios.post(
        "http://localhost:8000/chat",
        {
          question: question
        }
      );

      setChatResponse(response.data.response);

    } catch (error) {

      console.error(error);

      alert("Chatbot failed");

    }

    setChatLoading(false);
  };

  return (

    <div style={{ marginTop: "60px" }}>

      <h1>🤖 AI Fact Check Assistant</h1>

      <input
        type="text"
        placeholder="Ask AI about news..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "1000px",
          padding: "15px",
          borderRadius: "10px",
          fontSize: "16px"
        }}
      />

      <br /><br />

      <button onClick={askAI}>
        Ask AI
      </button>

      <br /><br />

      {chatLoading && (

        <div>
          <div className="loader"></div>
          <p>🤖 AI Thinking...</p>
        </div>

      )}

      {chatResponse && (

        <div
          className="result-box"
          style={{
            lineHeight: "1.8"
          }}
        >

          <h2>🤖 AI Response</h2>

          <TypeAnimation
            sequence={[chatResponse]}
            speed={75}
            cursor={true}
            repeat={0}
          />

        </div>

      )}

    </div>

  );
}

export default ChatBot;