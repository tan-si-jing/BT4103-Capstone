export const roadTypeData = {
  type: "bar",
  data: {
    labels: ["Undivided Road", "Slip Road", "Dual Road"],
    datasets: [
      {
        label: "No. Searches",
        data: [40, 50, 60],
        backgroundColor: [
          '#474747'
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
        text: ['Search Distribution','for Road Type'],
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

export default roadTypeData;