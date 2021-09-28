export const changeJunctionData = {
  type: "bar",
  data: {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "No. Searches",
        data: [0, 0],
        backgroundColor: [
          '#6b7473'
        ]
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
        text: ['Search Distribution','for Change at Junction'],
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
        text: 'Guide',
        color: 'rgba(0, 0, 0, 0.4)',
        align: 'start',
        font: {
          family: "'IBM Plex Sans', sans-serif",
          size: 14
        },
        padding: {
          bottom: 40
        }
      },
      legend: {
        display: false
      }
    }
  }
};

export default changeJunctionData;