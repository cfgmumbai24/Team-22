import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2>Pie Chart</h2>
      <Pie data={chartData} options={{
        plugins: {
          title: {
            display: true,
            text: chartData.title, // Set title from props
          },
        },
      }} />
    </div>
  );
};

export default PieChart;