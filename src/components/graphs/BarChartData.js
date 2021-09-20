export const barChartData = {
  type: "bar",
  data: {
    labels: ["Guide", "Specific"],
    datasets: [
      {
        label: "Traffic Engineers",
        data: [30, 40],
        backgroundColor: '#40aaad'
      }, {
        label: "Consultants",
        data: [25, 4],
        backgroundColor: '#f5a732'
      }, {
        label: "General Public",
        data: [10, 0],
        backgroundColor: '#9fa4a7'
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        grid: {
          display: false
        }
      },
      x: {
        stacked: true,
        grid: {
          display: false
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Comparison of Search Options',
        align: 'start',
        font: {
          family: "'IBM Plex Sans', sans-serif",
          size: 18
        }
      },
      subtitle: {
        display: true,
        text: 'Guide vs Specific',
        align: 'start',
        font: {
          family: "'IBM Plex Sans', sans-serif",
          size: 14
        },
        padding: {
          top: 10,
          bottom: 40
        }
      },
      legend: {
        position: 'bottom',
        align: 'start'
      }
    }
  }
};

export default barChartData;