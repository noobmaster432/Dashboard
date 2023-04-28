import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },

  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Spinning",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50000 })),
      backgroundColor: "rgba(87, 204, 120, 1)",
    },
    {
      label: "Transportation",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50000 })),
      backgroundColor: "rgba(85, 219, 219, 1)",
    },
    {
      label: "Carding",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50000 })),
      backgroundColor: "rgba(226, 255, 50, 1)",
    },
    {
      label: "Heating & Cooling",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50000 })),
      backgroundColor: "rgba(254, 193, 2, 1)",
    },
  ],
};

export default function Chart() {
  return (
    <Bar data={data} options={options} className="rounded-md" />
  );
}
