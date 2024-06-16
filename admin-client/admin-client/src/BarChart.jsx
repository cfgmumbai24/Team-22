import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'x', // Set the index axis to x for a vertical bar chart
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      // If needed, you can customize the y-axis scale options here
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false, // Disable the legend
    },
    title: {
      display: true,
      text: 'Vertical Bar Chart', // Set a title for the chart if needed
    },
  },
};

export default function BarChart({labels1,data2}) {
  const data1 = {
    labels: labels1,
    datasets: [
      {
        label: 'Mentors',
        data: data2,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };
  return <Bar data={data1} options={options} />;
}
