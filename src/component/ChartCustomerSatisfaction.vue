<template>
  <div class="customer-chart">
    <h2 class="chart-title">Customer Satisfaction</h2>

    <!-- Chart -->
    <div class="chart-container">
      <Line :data="chartData" :options="chartOptions" />
    </div>

    <!-- Legend -->
    <div class="chart-legend">
      <span class="legend-item">
        <span class="dot last-month"></span>
        Last Month &nbsp; <strong>$3,004</strong>
      </span>
      <span class="legend-item">
        <span class="dot this-month"></span>
        This Month &nbsp; <strong>$4,504</strong>
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
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler
)

export default {
  name: 'CustomerSatisfactionChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ['', '', '', '', '', '', ''], // no labels
        datasets: [
          {
            label: 'Last Month',
            data: [3000, 3500, 2000, 2100, 2200, 2400, 2800],
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#3B82F6',
            pointRadius: 4
          },
          {
            label: 'This Month',
            data: [4000, 4200, 3800, 3900, 3700, 4000, 4500],
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#10B981',
            pointRadius: 4
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
                return '$' + context.raw.toLocaleString()
              }
            }
          }
        },
        scales: {
          y: { display: false, grid: { display: false } },
          x: { display: false, grid: { display: false } }
        }
      }
    }
  }
}
</script>

<style scoped>
.customer-chart {
  background: #fff;              
  border-radius: 12px;             
  padding: 20px;                 
  box-shadow: 0 2px 8px rgba(0,0,0,0.05); 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;              
  box-sizing: border-box;
}

/* Chart title */
.chart-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #111827;
}

/* Chart container */
.chart-container {
  flex: 1;                      
  position: relative;            
  height: 200px;                  
}

/* Legend below chart */
.chart-legend {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 15px;
  flex-wrap: wrap;
}

/* Individual legend items */
.legend-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #374151;
}

/* Legend colored dot */
.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
}

.dot.last-month {
  background-color: #3B82F6; /* blue */
}

.dot.this-month {
  background-color: #10B981; /* green */
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .chart-container {
    height: 180px;
  }
}

@media (max-width: 768px) {
  .chart-container {
    height: 160px;
  }

  .chart-title {
    font-size: 16px;
  }

  .legend-item {
    font-size: 12px;
  }
}
</style>


