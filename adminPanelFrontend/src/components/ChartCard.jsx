// src/components/ChartCard.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const projectData = {
  labels: ["Proje A", "Proje B", "Proje C", "Proje D"],
  datasets: [
    {
      label: "Like Sayısı",
      data: [100, 150, 120, 200],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "GitHub Tıklanma Sayısı",
      data: [50, 70, 60, 50],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

function ChartCard() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Proje Etkileşimleri",
      },
    },
  };

  return <Bar data={projectData} options={options} />;
}

export default ChartCard;