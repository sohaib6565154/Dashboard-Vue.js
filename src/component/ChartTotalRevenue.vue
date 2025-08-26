<template>
  <div class="revenue-chart">
    <h2 class="title">Total Revenue</h2>

    <!-- Chart -->
    <div class="chart-container">
      <Bar :data="chartData" :options="chartOptions" />
    </div>

    <!-- Custom Legend -->
    <div class="chart-legend">
      <div class="legend-item">
        <span class="dot online"></span>
        Online Sales
      </div>
      <div class="legend-item">
        <span class="dot offline"></span>
        Offline Sales
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
  name: 'TotalRevenueChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            backgroundColor: '#3B82F6', // blue
            data: [1300, 1700, 600, 1600, 1200, 1600, 2100],
            borderRadius: 6,
            label: 'Online Sales'
          },
          {
            backgroundColor: '#10B981', // green
            data: [1200, 1100, 2400, 1200, 1100, 1300, 1100],
            borderRadius: 6,
            label: 'Offline Sales'
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }, // hide default legend
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.dataset.label + ': $' + context.raw.toLocaleString()
              }
            }
          }
        },
        scales: {
          y: {
            ticks: {
              callback: function (value) {
                return '$' + (value / 1000) + 'k'
              },
              color: '#555'
            },
            grid: { color: '#eee' }
          },
          x: {
            ticks: { color: '#555' },
            grid: { color: '#eee' }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.revenue-chart {
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  width: 100%;
  box-sizing: border-box;
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #222;
}

.chart-container {
  position: relative;
  height: 250px;
}

/* Custom Legend */
.chart-legend {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 12px;
  font-size: 14px;
  color: #444;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
}

.dot.online {
  background-color: #3B82F6;
}

.dot.offline {
  background-color: #10B981;
}

@media (max-width: 480px) {
  .revenue-chart {
    padding: 12px;
  }
  .title {
    font-size: 16px;
  }
  .chart-legend {
    font-size: 12px;
  }
  .dot {
    width: 12px;
    height: 12px;
  }
}
</style>
