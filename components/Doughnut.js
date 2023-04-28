"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  cutout: 160,
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
  },
};

export const data = {
  maintainAspectRatio: true,
  responsive: true,
  labels: ["Spinning", "Transportation", "Carding", "Heating & Cooling"],
  datasets: [
    {
      data: [22, 16, 27, 35],

      backgroundColor: [
        "rgba(87, 204, 120, 1)",
        "rgba(85, 219, 219, 1)",
        "rgba(226, 255, 50, 1)",
        "rgba(254, 193, 2, 1)",
      ],
      borderwidth: 0,
    },
  ],
};

export default function Nut() {
  return (
    <div className="flex flex-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
}
