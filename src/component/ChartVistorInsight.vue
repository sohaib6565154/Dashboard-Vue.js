<template>
  <div class="visitor-chart">
    <h2 class="title">Visitor Insights</h2>
    <div class="chart-container">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)

export default {
  name: 'VisitorInsightsChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Loyal Customers',
            data: [300, 320, 280, 260, 270, 310, 350, 340, 300, 280, 260, 250],
            borderColor: '#A700FF', 
            backgroundColor: 'transparent',
            tension: 0.4,
            borderWidth: 2.5,
            pointRadius: 0
          },
          {
            label: 'New Customers',
            data: [200, 180, 230, 250, 300, 370, 390, 360, 320, 280, 250, 220],
            borderColor: '#EF4444', 
            backgroundColor: 'transparent',
            tension: 0.4,
            borderWidth: 2.5,
            pointRadius: (ctx) => (ctx.dataIndex === 6 ? 6 : 0), // highlight July
            pointBackgroundColor: '#EF4444'
          },
          {
            label: 'Unique Customers',
            data: [250, 260, 280, 290, 320, 300, 280, 260, 240, 220, 210, 200],
            borderColor: '#3CD856',
            backgroundColor: 'transparent',
            tension: 0.4,
            borderWidth: 2.5,
            pointRadius: 0
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              boxWidth: 8,
              boxHeight: 8,
              font: { size: 12, weight: '500' },
              color: '#444'
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: ${context.raw}`
              }
            }
          }
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#555' },
            grid: { color: '#f3f3f3' }
          },
          x: {
            ticks: { color: '#555' },
            grid: { display: false }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
/* .chart-container {
  height: 250px; 
  width: 100%;
  position: relative;
}

canvas {
  height: 100% !important;
  width: 100% !important;
}


@media (max-width: 480px) {

} */
</style>
