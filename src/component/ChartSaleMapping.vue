<template>
  <div class="sales-map">
    <h2 class="chart-title">Sales Mapping by Country</h2>
    <div ref="chart" class="chart-container"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { feature } from 'topojson-client'
import worldData from 'world-atlas/countries-50m.json'

export default {
  name: 'SalesMappingByCountry',
  mounted() {
    const chart = echarts.init(this.$refs.chart)

    // Convert TopoJSON to GeoJSON
    const geoJson = feature(worldData, worldData.objects.countries)

    // Register the map with ECharts
    echarts.registerMap('world', geoJson)

    chart.setOption({
      tooltip: { show: false },
      series: [
        {
          type: 'map',
          map: 'world',
          roam: false,
          emphasis: { label: { show: false } },
          itemStyle: {
            areaColor: '#E0E0E0',
            borderColor: '#ffffff'
          },
          data: [
            { name: 'United States', itemStyle: { areaColor: '#FFA726' } },
            { name: 'Brazil', itemStyle: { areaColor: '#EF5350' } },
            { name: 'China', itemStyle: { areaColor: '#AB47BC' } },
            { name: 'Indonesia', itemStyle: { areaColor: '#26A69A' } },
            { name: 'Egypt', itemStyle: { areaColor: '#26C6DA' } }
          ]
        }
      ]
    })

    // ✅ Make chart responsive
    window.addEventListener('resize', () => {
      chart.resize()
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', () => {
      chart.resize()
    })
  }
}
</script>

<style scoped>
.sales-map {
  background: #fff;                        /* dashboard card style */
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  min-height: 250px;
  box-sizing: border-box;
}

/* Chart title */
.chart-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 15px;
}

/* Chart container */
.chart-container {
  flex: 1;                  /* fill remaining space */
  width: 100%;
  min-height: 200px;        /* default height */
  position: relative;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .chart-container {
    min-height: 180px;
  }
  .chart-title {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .chart-container {
    min-height: 160px;
  }
  .chart-title {
    font-size: 15px;
  }
}
</style>
