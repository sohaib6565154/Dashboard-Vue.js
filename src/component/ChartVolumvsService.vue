<template>
  <div class="volume-service-card">
    <h2 class="title">Volume vs Service Level</h2>

    <div class="chart-container">
      <Bar :data="chartData" :options="chartOptions" />
    </div>

    <!-- Custom Legend -->
    <div class="chart-legend">
      <span class="legend-item">
        <span class="dot volume"></span>
        Volume &nbsp; <strong>1,135</strong>
      </span>
      <span class="legend-item">
        <span class="dot services"></span>
        Services &nbsp; <strong>635</strong>
      </span>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'VolumeServiceChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['', '', '', '', '', ''], // empty bars (no labels)
        datasets: [
          {
            label: 'Volume',
            data: [700, 800, 600, 500, 400, 500],
            backgroundColor: '#3B82F6',
            stack: 'combined'
          },
          {
            label: 'Services',
            data: [435, 500, 350, 300, 235, 300],
            backgroundColor: '#10B981',
            stack: 'combined'
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: ${context.raw.toLocaleString()}`
              }
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            display: false,
            grid: { display: false }
          },
          y: {
            stacked: true,
            display: false,
            grid: { display: false }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.volume-service-card {
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  width: 100%;
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #222;
}

.chart-container {
  position: relative;
}

.chart-legend {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
}

.legend-item {
  color: #555;
  display: flex;
  align-items: center;
  gap: 5px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.volume {
  background-color: #3B82F6;
}

.services {
  background-color: #10B981;
}

@media (max-width: 480px) {
  .volume-service-card {
    padding: 12px;
  }
  .title {
    font-size: 16px;
  }
  .chart-legend {
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
  }
}
</style>
