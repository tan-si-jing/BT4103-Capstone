export const barChartData = {
  type: "bar",
  data: {
    labels: ["Specific", "Guide"],
    datasets: [
      {
        label: "Traffic Engineers",
        data: [0, 0],
        backgroundColor: '#40aaad'
      }, {
        label: "Consultants",
        data: [0, 0],
        backgroundColor: '#f5a732'
      }, {
        label: "General Public",
        data: [0, 0],
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
        color: '#263238',
        align: 'start',
        font: {
          family: "'IBM Plex Sans', sans-serif",
          size: 18,
          weight: 'normal'
        }
      },
      subtitle: {
        display: true,
        text: 'Specific vs Guide',
        color: 'rgba(0, 0, 0, 0.4)',
        align: 'start',
        font: {
          family: "'IBM Plex Sans', sans-serif",
          size: 14
        },
        padding: {
          bottom: 30
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