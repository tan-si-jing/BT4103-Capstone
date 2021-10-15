export const donutChartData = {
  type: "doughnut",
  data: {
    labels: ["Traffic Engineers", "Consultants", "General Public"],
    datasets: [
      {
        label: "Number of Users",
        data: [0, 0, 0],
        backgroundColor: [
          '#40aaad',
          '#f5a732',
          '#9fa4a7'
        ],
        hoverOffset: 4
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: 80,
    plugins: {
      title: {
        display: true,
        text: 'User Type Breakdown',
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
        text: 'In Total',
        color: 'rgba(0, 0, 0, 0.4)',
        align: 'start',
        font: {
          family: "'IBM Plex Sans', sans-serif",
          size: 14
        }
      },
      legend: {
        display: false
      }
    }
  }
};

export default donutChartData;