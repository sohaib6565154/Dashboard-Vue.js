<template>
  <div class="target-reality-chart">
    <h2 class="chart-title">Target vs Reality</h2>

    <!-- Chart -->
    <div class="chart-container">
      <Bar :data="chartData" :options="chartOptions" />
    </div>

    <!-- Legend -->
    <div class="chart-legend">
      <div class="legend-item">
        <span class="icon reality-icon">📦</span>
        <div>
          <div class="legend-title">Reality Sales</div>
          <small>Global</small>
        </div>
        <strong class="legend-value reality-value">8,823</strong>
      </div>

      <div class="legend-item">
        <span class="icon target-icon">🎯</span>
        <div>
          <div class="legend-title">Target Sales</div>
          <small>Commercial</small>
        </div>
        <strong class="legend-value target-value">12,122</strong>
      </div>
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
  name: 'TargetRealityChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Reality Sales',
            data: [7000, 6000, 8000, 7500, 9000, 8500, 8800],
            backgroundColor: '#10B981',
            categoryPercentage: 0.6,
            barPercentage: 0.5
          },
          {
            label: 'Target Sales',
            data: [9000, 8000, 8500, 8200, 10000, 9500, 9700],
            backgroundColor: '#FBBF24',
            categoryPercentage: 0.6,
            barPercentage: 0.5
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
                return context.dataset.label + ': ' + context.raw.toLocaleString()
              }
            }
          }
        },
        scales: {
          y: { display: false, grid: { display: false } },
          x: { grid: { display: false } }
        }
      }
    }
  }
}
</script>

<style scoped>
.target-reality-chart {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.chart-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.5rem;
}

.chart-container {
  position: relative;
  width: 100%;
}

.chart-legend {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  flex-wrap: wrap; 
  gap: 12px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 1 45%;
}

.icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 16px;
}
.reality-icon {
  background-color: rgba(16, 185, 129, 0.1);
  color: #10B981;
}
.target-icon {
  background-color: rgba(251, 191, 36, 0.1);
  color: #FBBF24;
}

.legend-title {
  font-size: 14px;
  font-weight: 600;
}
.legend-value {
  margin-left: auto;
  font-weight: bold;
}
.reality-value {
  color: #10B981;
}
.target-value {
  color: #FBBF24;
}

@media (max-width: 480px) {
  .chart-container {
    height: 220px;
  }
  .chart-title {
    font-size: 1rem;
  }
  .legend-title {
    font-size: 13px;
  }
  .legend-value {
    font-size: 13px;
  }
}
</style>
