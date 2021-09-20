export const lineChartData = {
  type: "line",
  data: {
    labels: ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", 
            "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"],
    datasets: [
      {
        label: "Average Number of Users",
        data: [3, 2, 1, 2, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 2 ,1, 2, 3, 3, 3, 2, 2, 3, 2],
        borderColor: 'rgba(39, 59, 140, 0.8)',
        fill: true,
        backgroundColor: 'rgba(96, 125, 139, 0.2)',
        borderWidth: 1,
        pointStyle: 'cross',
        pointRadius: 1, /** small indication of point */
        hitRadius: 4 /** easier to hover for tooltip */
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Average Visits each Hour',
        align: 'start',
        font: {
          family: "'IBM Plex Sans', sans-serif",
          size: 18
        },
        padding: {
          top: 10,
          bottom: 40
        }
      },
      legend: {
        display: false
      }
    }
  }
};

export default lineChartData;