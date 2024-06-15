import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  ArcElement,
  LineElement,
  PointElement,
  RadialLinearScale,
  PolarAreaController
} from 'chart.js';
import './charts.css';

// Register necessary components for Chart.js
ChartJS.register(
  Title,
  Tooltip,
  ArcElement,
  LineElement,
  PointElement,
  RadialLinearScale,
  PolarAreaController
);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true, // Display legend
      position: 'top', // Adjust legend position
    },
    title: {
      display: true,
      text: '',
      font: {
        size: 18,
        weight: 'bold',
      },
      color: '#333',
    },
  },
};

const PieChart = () => (
  <div className="chart-container"> {/* Wrap with container */}
    <Pie data={data} options={options} />
  </div>
);

export default PieChart;




