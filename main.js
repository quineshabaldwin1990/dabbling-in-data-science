const ctx = document.getElementById('myChart').getContext('2d');
const labels = ['Australia', 'China', 'France', 'Germany', 'Germany, East', 'Great Britain', 'Hungary', 'Italy', 'Japan', 'Russia', 'Soviet Union', 'Sweden', 'United States']
const data = {
    labels: labels,
    datasets: [{
      label: 'Average Medals won in Summer Olympics per appearance',
      data: [17.75, 54.6, 25.57, 38.44, 81.8, 30.39, 18.88, 21.37, 19.95, 71.33, 112.22, 18.3, 93.41],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
};

const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  }
);