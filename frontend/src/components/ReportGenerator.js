import jsPDF from "jspdf";

export const generatePDF = (result) => {

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("AI News Guardian Report", 20, 20);

  doc.setFontSize(12);

  doc.text(
    `Prediction: ${result.prediction}`,
    20,
    40
  );

  doc.text(
    `Confidence: ${result.confidence}%`,
    20,
    50
  );

  if (result.credibility) {

    doc.text(
      `Credibility Score: ${result.credibility.score}/100`,
      20,
      60
    );

    doc.text(
      `Rating: ${result.credibility.rating}`,
      20,
      70
    );
  }

  doc.text(
    "AI Explanation:",
    20,
    90
  );

  const explanation =
    doc.splitTextToSize(
      result.explanation || "No explanation available",
      170
    );

  doc.text(
    explanation,
    20,
    100
  );

  doc.save(
    "AI_News_Report.pdf"
  );
};