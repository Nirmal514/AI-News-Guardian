import React, { useState } from "react";
import axios from "axios";

function ImageAnalyzer() {

  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeImage = async () => {

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();

    formData.append(
      "file",
      image
    );

    setLoading(true);

    try {

      const response = await axios.post(
        "http://localhost:8000/analyze-image",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data"
          }
        }
      );

      setResult(response.data);

    } catch (error) {

      console.error(error);

      alert(
        "Image analysis failed"
      );

    }

    setLoading(false);
  };

  return (

    <div>

      <h1>🖼️ News Image Analyzer</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setImage(
            e.target.files[0]
          )
        }
      />

      <br /><br />

      <button
        onClick={analyzeImage}
      >
        Analyze Image
      </button>

      <br /><br />

      {loading &&
        <h3>
          Extracting Text...
        </h3>
      }

      {result && (

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            marginTop: "20px"
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
            Extracted Text
          </h3>

          <p>
            {result.text}
          </p>

          <h3>
            AI Explanation
          </h3>

          <p>
            {result.explanation}
          </p>

        </div>

      )}

    </div>
  );
}

export default ImageAnalyzer;