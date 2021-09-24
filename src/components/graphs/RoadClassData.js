export const roadClassData = {
  type: "bar",
  data: {
    labels: ["Expressway", "Semi Expressway", "Major Arterial",
              "Minor Arterial", "Primary Access", "Local Access"],
    datasets: [
      {
        label: "No. Searches",
        data: [40, 50, 60, 70, 80, 90],
        backgroundColor: [
          '#407fad'
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
        text: 'Search Distribution for Road Classification',
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

export default roadClassData;