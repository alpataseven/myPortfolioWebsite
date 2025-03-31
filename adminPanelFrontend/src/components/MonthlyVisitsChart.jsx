// src/components/MonthlyVisitsChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const monthlyVisits = {
  labels: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ],
  datasets: [
    {
      label: "Ziyaret Sayısı",
      data: [1200, 1500, 1800, 2000, 2200, 2500, 2300, 2100, 1900, 1700, 1600, 1400],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

function MonthlyVisitsChart() {
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
        text: "Aylık Ziyaret Sayıları",
      },
    },
  };

  return <Line data={monthlyVisits} options={options} />;
}

export default MonthlyVisitsChart;