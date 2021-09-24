export const lineChartData = {
  type: "line",
  data: {
    labels: ["12AM - 1AM", "1AM - 2AM", "2AM - 3AM", "3AM - 4AM", "4AM - 5AM", "5AM - 6AM", "6AM - 7AM", 
            "7AM - 8AM", "8AM - 9AM", "9AM - 10AM", "10AM - 11AM", "11AM - 12PM", 
            "12PM - 1PM", "1PM - 2PM", "2PM - 3PM", "3PM - 4PM", "4PM - 5PM", "5PM - 6PM", "6PM - 7PM", 
            "7PM - 8PM", "8PM - 9PM", "9PM - 10PM", "10PM - 11PM", "11PM - 12AM"],
    datasets: [
      {
        label: "Average Number of Users",
        data: [56, 30, 22, 10, 4, 44, 46, 50, 89, 75, 101, 123, 66, 54, 144, 150, 156, 170, 132, 73, 54, 62, 32, 12],
        borderColor: 'rgba(39, 59, 140, 0.8)',
        fill: true,
        backgroundColor: 'rgba(96, 125, 139, 0.2)',
        borderWidth: 1,
        tension: 0.3,
        pointStyle: 'cross',
        pointRadius: 1, /** small indication of point */
        hitRadius: 4 /** easier to hover for tooltip */
      }
    ]
  },
  options: {
    responsive: true,
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
        color: '#263238',
        align: 'start',
        font: {
          family: "'IBM Plex Sans', sans-serif",
          size: 18,
          weight: 'normal'
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