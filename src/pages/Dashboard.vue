<script>
import TodaySales from '@/component/TodaySales.vue';
import ChartVistorInsight from '@/component/ChartVistorInsight.vue';
import ChartTotalRevenue from '@/component/ChartTotalRevenue.vue';
import ChartCustomerSatisfaction from '@/component/ChartCustomerSatisfaction.vue';
import ChartTargetvsReality from '@/component/ChartTargetvsReality.vue';
import ChartTopProduct from '@/component/ChartTopProduct.vue';
import ChartSaleMapping from '@/component/ChartSaleMapping.vue';
import ChartVolumvsService from '@/component/ChartVolumvsService.vue';

export default {
  components: {
    TodaySales,
    ChartVistorInsight,
    ChartTotalRevenue,
    ChartCustomerSatisfaction,
    ChartTargetvsReality,
    ChartTopProduct,
    ChartSaleMapping,
    ChartVolumvsService,
  }
}
</script>

<template>
  <div class="dashboard">
    <main class="content">
      <!-- Row 1 -->
      <section class="row sales-visitor">
        <TodaySales />
        <ChartVistorInsight />
      </section>

      <!-- Row 2 -->
      <section class="row three-charts">
        <ChartTotalRevenue />
        <ChartCustomerSatisfaction />
        <ChartTargetvsReality />
      </section>

      <!-- Row 3 -->
      <section class="row bottom-charts">
        <ChartTopProduct />
        <ChartSaleMapping />
        <ChartVolumvsService />
      </section>
    </main>
  </div>
</template>

<style scoped>
.dashboard {
  flex: 1;
  background: #f8f9fd;
  padding-top: 10px;   
  min-height: 100vh;
  box-sizing: border-box;
  width: calc(100%-250px);
}

.content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

/* === Row 1 (2 columns: 60% / 40%) === */
.sales-visitor > *:first-child {
  flex: 0 0 calc(60% - 10px);
}
.sales-visitor > *:last-child {
  flex: 0 0 calc(40% - 10px);
}
.three-charts > *:first-child {
  flex: 0 0 calc(35% - 20px);
}
.three-charts > *:nth-child(2),
.three-charts > *:nth-child(3) {
  flex: 0 0 calc(33% - 20px);
}
/* === Row 2 & Row 3 (3 columns: 40% / 30% / 30%) === */
.bottom-charts > *:first-child {
  flex: 0 0 calc(35% - 20px);
}
.bottom-charts > *:nth-child(2),
.bottom-charts > *:nth-child(3) {
  flex: 0 0 calc(33% - 20px);
}

/* Card Style */
.row > * {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  min-height: 250px;
  box-sizing: border-box;
}

/* ✅ Responsive Breakpoints */
@media (max-width: 1200px) {

  .three-charts > * {
    flex: 1 1 calc(100% - 10px); 
  }
}
@media (max-width: 1024px) {

  .sales-visitor > *:first-child {
  flex: 0 0 calc(100% );
}
.sales-visitor > *:last-child {
  flex: 0 0 calc(100% );
}
.three-charts > *:first-child {
  flex: 0 0 calc(100% );
}
.three-charts > *:nth-child(2),
.three-charts > *:nth-child(3) {
  flex: 0 0 calc(100% );
}
/* === Row 2 & Row 3 (3 columns: 40% / 30% / 30%) === */
.bottom-charts > *:first-child {
  flex: 0 0 calc(100% );
}
.bottom-charts > *:nth-child(2),
.bottom-charts > *:nth-child(3) {
  flex: 0 0 calc(100% );
}
}
@media (max-width: 768px) {

  .content {
    padding: 10px;
  }

  .row > * {
    min-height: 200px;
  }
}
</style>
