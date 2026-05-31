import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function AnalyticsChart() {

  const pieData = {
    labels: ["Real News", "Fake News"],
    datasets: [
      {
        data: [112, 34],
        backgroundColor: [
          "#10B981",
          "#EF4444"
        ]
      }
    ]
  };

  const barData = {
    labels: [
      "Detector",
      "URL Scan",
      "Summary",
      "Fact Check"
    ],

    datasets: [
      {
        label: "Usage",
        data: [45, 25, 18, 12]
      }
    ]
  };

  return (

    <div
      style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        marginTop: "40px"
      }}
    >

      <div
        style={{
          width: "400px",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "20px"
        }}
      >
        <h2>News Classification</h2>

        <Pie data={pieData} />
      </div>

      <div
        style={{
          width: "500px",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "20px"
        }}
      >
        <h2>Module Usage</h2>

        <Bar data={barData} />
      </div>

    </div>

  );
}

export default AnalyticsChart;